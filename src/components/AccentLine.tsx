export default function AccentLine({
  orientation = "horizontal",
  length = "120px",
  thickness = "4px",
  className = "",
}: {
  orientation?: "vertical" | "horizontal";
  length?: string;
  thickness?: string;
  className?: string;
}) {
  const style =
    orientation === "vertical"
      ? { width: thickness, height: length }
      : { height: thickness, width: length };

  return (
    <div
      style={style}
      className={`
        bg-gradient-to-b from-[#4F91FF] to-[#8B5CF6]
        shadow-[0_0_10px_rgba(79,145,255,0.5)]
        ${className}
      `}
    />
  );
}
