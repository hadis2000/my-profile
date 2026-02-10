import { useEffect, useRef, useState } from "react";

type ScratchProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScratchCard({ children, className }: ScratchProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isDrawing, setIsDrawing] = useState(false);

  // Measure content size
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });
  }, [children]);

  // Draw gray layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || size.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#bcbcbca4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out";
  }, [size]);

  const startDrawing = () => setIsDrawing(true);
  const endDrawing = () => setIsDrawing(false);

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <div className={`relative inline-block`}>
      {/* children determines real width/height */}
      <div
        ref={wrapperRef}
        className={`flex flex-wrap items-center justify-center gap-2 p-3 ${className}`}
      >
        {children}
      </div>

      {/* Canvas overlays but matches exact content size */}
      {size.width > 0 && (
        <canvas
          ref={canvasRef}
          width={size.width}
          height={size.height}
          className="absolute inset-0 cursor-pointer rounded-xl"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          onMouseLeave={endDrawing}
        />
      )}
    </div>
  );
}
