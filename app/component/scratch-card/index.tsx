import { useEffect, useRef, useState } from "react";

type ScratchProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
};

export default function ScratchCard({
  children,
  width = 300,
  height = 120,
}: ScratchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Full gray cover
    ctx.fillStyle = "#bcbcbc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Important: set mode so drawing will erase
    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const startDrawing = () => setIsDrawing(true);
  const endDrawing = () => setIsDrawing(false);

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
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
    <div className="relative" style={{ width, height }}>
      {/* Hidden text */}
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {children}
      </div>

      {/* Scratch layer */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute inset-0 cursor-pointer"
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onMouseLeave={endDrawing}
      />
    </div>
  );
}
