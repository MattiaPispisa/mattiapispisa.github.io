import { useCallback, useMemo, useState } from "react";
import { formatDate } from "../../../functions";
import {
  ListItem,
  Chip,
  SubTitle,
  ButtonChip,
  HorizontalList,
} from "../../widgets";
import { posts } from "./posts";
import { PostModel } from "./model";
import React from "react";
import { useAppTranslation } from "../../../locale";

function Posts() {
  const { language } = useAppTranslation();

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
        <HorizontalList className="mb-2">
          {hashtagsSelected.map((hashtag) => (
            <Chip
              key={hashtag}
              name={hashtag}
              onRemove={() => removeHashtag(hashtag)}
            />
          ))}
        </HorizontalList>
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
              trailing={formatDate(post.date, { language })}
              footer={
                <HorizontalList>
                  {post.hashtags.map((hashtag) => {
                    return (
                      <ButtonChip
                        key={hashtag}
                        label={`#${hashtag}`}
                        onClick={() => addHashtag(hashtag)}
                      />
                    );
                  })}
                </HorizontalList>
              }
            />
          );
        })}
      </li>
    </>
  );
}

export default Posts;
