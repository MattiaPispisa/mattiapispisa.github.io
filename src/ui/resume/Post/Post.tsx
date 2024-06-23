import { formatDate } from "../../../functions";
import {
  ListItem,
  Chip,
  SubTitle,
  ButtonChip,
  HorizontalList,
} from "../../widgets";
import { posts } from "./posts";
import React from "react";
import { useAppTranslation } from "../../../locale";
import { useHashtags } from "../../../hooks";

function Posts() {
  const { language, t } = useAppTranslation();

  const { addHashtag, canView, hashtagsSelected, removeHashtag } =
    useHashtags();

  return (
    <>
      <SubTitle>{t("post")}</SubTitle>
      <HorizontalList className="mb-2">
        {hashtagsSelected.map((hashtag) => (
          <Chip
            key={hashtag}
            name={hashtag}
            onRemove={() => removeHashtag(hashtag)}
          />
        ))}
      </HorizontalList>
      <li className="flex flex-col gap-y-12">
        {posts(t).map((post) => {
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
