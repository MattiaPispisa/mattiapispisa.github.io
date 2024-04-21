import {
  ListItem,
  Chip,
  SubTitle,
  ButtonChip,
  HorizontalList,
} from "../../widgets";
import React from "react";
import { useAppTranslation } from "../../../locale";
import { useHashtags } from "../../../hooks";
import { projects } from "./projects";

function Project() {
  const { t } = useAppTranslation();

  const { addHashtag, canView, hashtagsSelected, removeHashtag } =
    useHashtags();

  return (
    <>
      <SubTitle>{t("project")}</SubTitle>
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
        {projects(t).map((project) => {
          if (!canView(project)) {
            return <React.Fragment key={project.link}></React.Fragment>;
          }

          return (
            <ListItem
              key={project.link}
              link={project.link}
              title={project.title}
              description={project.description}
              footer={
                <HorizontalList>
                  {project.hashtags.map((hashtag) => {
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

export default Project;
