import { useState } from "react";
import { useAppTranslation } from "../../../locale";
import { Button, Text } from "../../widgets";
import { SkillModel } from "./model";

type Props = {
  skill: SkillModel;
};

function Skill(props: Props) {
  const { title, description, level, microskills } = props.skill;
  const { t } = useAppTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate percentage (level out of 5)
  const percentage = (level / 5) * 100;
  const hasMicroskills = microskills && microskills.length > 0;

  return (
    <div className="flex flex-col gap-2 print:gap-1 print-avoid-break h-full min-w-0">
      <div className="flex justify-between items-baseline gap-2">
        <Text
          type="h3"
          size="lg"
          className="font-bold uppercase break-words min-w-0 flex-1"
        >
          {title}
        </Text>
        <Text
          type="span"
          semantic="secondary"
          size="xs"
          className="whitespace-nowrap flex-shrink-0"
        >
          {level}/5
        </Text>
      </div>

      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden print:h-1.5">
        <div
          className="h-full bg-primary dark:bg-primary-dark transition-all duration-300 print:transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {description && (
        <Text size="sm" className="break-words">{description}</Text>
      )}

      {hasMicroskills && (
        <>
          {/* Accordion button - hidden in print */}
          <Button
            variant="flat"
            semantic="secondary"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            text={
              <>
                <span className="mr-1">{isExpanded ? "▼" : "▶"}</span>
                {t("moreDetail")}
              </>
            }
            className="justify-start px-2 py-1 -ml-2 print:hidden"
          />

          <div
            className={`flex flex-wrap gap-1.5 mt-1 ${
              isExpanded ? "" : "hidden print:flex"
            }`}
          >
            {microskills.map((microskill, index) => (
              <Text
                key={index}
                type="span"
                size="xs"
                semantic="secondary"
                className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded print:bg-transparent print:border print:border-gray-400 "
              >
                {microskill}
              </Text>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Skill;
