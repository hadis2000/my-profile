import React, { useRef, useEffect, useState } from "react";

interface CircleSpinnerProps {
  items: string[];
  rotationSpeed?: number; // درجه در هر فریم
}

const colors = ["#F6CBB3", "#C45798", "#AB1B1F", "#404F6F", "#DC677F"];

const CircleSpinner: React.FC<CircleSpinnerProps> = ({
  items,
  rotationSpeed = 2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [angle, setAngle] = useState(0);

  // گرفتن اندازه واقعی container برای محاسبه شعاع
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setRadius(width / 3); // انتخاب نسبت مناسب به عرض (مثلاً نصف یا کمتر)
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // چرخش با انیمیشن تدریجی
  useEffect(() => {
    const id = setInterval(() => {
      setAngle((prev) => prev + rotationSpeed);
    }, 30);
    return () => clearInterval(id);
  }, [rotationSpeed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square flex items-center justify-center overflow-visible"
    >
      {/* دایره اصلی */}
      <div
        className="absolute rounded-full"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      ></div>

      {/* المان‌ها دور دایره */}
      {items.map((item, i) => {
        const itemAngle = (angle + (360 / items.length) * i) * (Math.PI / 180);
        const x = radius * Math.cos(itemAngle);
        const y = radius * Math.sin(itemAngle);

        return (
          <div
            key={i}
            className="absolute text-base rounded-full px-2 py-1 transition-all duration-75
            bg-white font-bold w-fit shadow-[4px_4px_4.7px_0px_rgba(0,0,0,0.25)]
            "
            style={{
              transform: `translate(${x}px, ${y}px)`,
              color: colors.length > items.length ? "#000" : colors[i],
            }}
          >
            {item.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default CircleSpinner;
