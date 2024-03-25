import { useCallback, useMemo, useState } from "react";
import { formatDate } from "../../../functions";
import { ListItem, Chip, SubTitle, ButtonChip } from "../../widgets";
import { posts } from "./posts";
import { PostModel } from "./model";
import React from "react";

function Posts() {
  const [hashtags, setHashtagsSelected] = useState<Record<string, boolean>>({});
  const hashtagsSelected = useMemo(() => {
    return Object.entries(hashtags)
      .filter(([, selected]) => selected)
      .map(([hashtag]) => hashtag);
  }, [hashtags]);

  const ignoreFilters = useMemo(() => {
    return Object.values(hashtags).filter((sel) => sel).length === 0;
  }, [hashtags]);

  const addHashtag = useCallback((hashtag: string) => {
    setHashtagsSelected((prev) => ({ ...prev, [hashtag]: true }));
  }, []);

  const removeHashtag = useCallback((hashtag: string) => {
    setHashtagsSelected((prev) => ({ ...prev, [hashtag]: false }));
  }, []);

  const canView = useCallback(
    (post: PostModel) => {
      console.log("hashtags", hashtags, "ignoreFilters", ignoreFilters);
      return (
        post.hashtags.some((hashtag) => hashtags[hashtag]) || ignoreFilters
      );
    },
    [hashtags, ignoreFilters]
  );

  return (
    <>
      <SubTitle>
        <p>Post</p>
      </SubTitle>
      {
        <div className="flex flex-row gap-2">
          {hashtagsSelected.map((hashtag) => (
            <Chip
              key={hashtag}
              name={hashtag}
              onRemove={() => removeHashtag(hashtag)}
            />
          ))}
        </div>
      }
      <li className="flex flex-col gap-y-12">
        {posts.map((post) => {
          if (!canView(post)) {
            return <React.Fragment key={post.link}></React.Fragment>;
          }

          return (
            <ListItem
              key={post.link}
              link={post.link}
              title={post.title}
              description={post.description}
              trailing={<p>{formatDate(post.date)}</p>}
              footer={
                <>
                  {post.hashtags.map((hashtag) => {
                    return (
                      <ButtonChip
                        key={hashtag}
                        label={`#${hashtag}`}
                        onClick={() => addHashtag(hashtag)}
                      />
                    );
                  })}
                </>
              }
            />
          );
        })}
      </li>
    </>
  );
}

export default Posts;
