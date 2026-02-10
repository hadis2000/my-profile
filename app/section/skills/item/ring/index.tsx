import { SkillItemType } from "..";

const Ring = ({ percent = 0 }: Pick<SkillItemType, "percent">) => {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const getColor = () => {
    if (percent < 40) return "var(--dPink-600)";
    if (percent < 70) return "var(--dPink-500)";
    return "var(--dBlue-500)";
  };

  return (
    <svg className="absolute inset-0 -rotate-90" width="80" height="80">
      {/* background */}
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="var(--dGray-500)"
        strokeOpacity="0.15"
        strokeWidth="4"
        fill="transparent"
      />

      {/* progress */}
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke={getColor()}
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-700 ease-out"
      />
    </svg>
  );
};

export default Ring;
