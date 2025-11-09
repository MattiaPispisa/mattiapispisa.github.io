import { Text } from "../../widgets";

type Props = {
  title: string;
  description: string;
  level: number; // 1 to 5
};

function Skill(props: Props) {
  const { title, description, level } = props;
  
  // Calculate percentage (level out of 5)
  const percentage = (level / 5) * 100;

  return (
    <div className="flex flex-col gap-2 print:gap-1 print-avoid-break h-full min-w-0">
      <div className="flex justify-between items-baseline gap-2">
        <h3 className="text-lg font-bold uppercase print:text-base break-words min-w-0 flex-1">{title}</h3>
        <span className="text-xs text-gray-500 print:text-xs whitespace-nowrap flex-shrink-0">
          {level}/5
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden print:h-1.5">
        <div
          className="h-full bg-primary dark:bg-primary-dark transition-all duration-300 print:transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <Text className="text-sm print:text-xs break-words">{description}</Text>
    </div>
  );
}

export default Skill;

