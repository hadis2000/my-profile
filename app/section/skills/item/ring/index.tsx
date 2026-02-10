import { SkillItemType } from "..";

const Ring = ({ percent = 0, title, years }: Omit<SkillItemType, "imgUrl">) => {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const getColor = () => {
    if (percent < 30) return "var(--dBlue-300)";
    if (percent < 60) return "var(--dBlue-400)";
    if (percent < 80) return "var(--dBlue-500)";
    return "var(--dBlue-50)";
  };

  return (
    <svg className="absolute inset-0 -rotate-90" width="80" height="80">
      <defs>
        <path
          id="text-circle"
          d="M 40,40 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
        />
      </defs>

      {/* background ring */}
      <circle
        cx="40"
        cy="40"
        r={radius}
        stroke="var(--dGray-500)"
        strokeOpacity="0.15"
        strokeWidth="4"
        fill="transparent"
      />

      {/* progress ring */}
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

      {/* rotating text via group rotation */}
      <g className="rotate-text">
        <text className="fill-(--dGray-500) text-[8px] tracking-widest">
          <textPath href="#text-circle" startOffset="0%">
            {title} • {years} YEARS
          </textPath>
        </text>
      </g>
    </svg>
  );
};

export default Ring;
