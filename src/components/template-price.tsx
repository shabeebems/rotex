export const RESUME_SALE_PRICE = 349;
export const RESUME_ORIGINAL_PRICE = 1119;

type TemplatePriceProps = {
  className?: string;
  size?: "sm" | "md";
};

export default function TemplatePrice({
  className = "",
  size = "md",
}: TemplatePriceProps) {
  const saleClass =
    size === "sm"
      ? "text-base font-bold text-forest-900"
      : "text-lg font-bold text-forest-900";
  const originalClass =
    size === "sm"
      ? "text-xs text-muted line-through decoration-1 text-red-500"
      : "text-sm text-muted line-through decoration-1 text-red-500";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={saleClass}>₹{RESUME_SALE_PRICE}</span>
      <span className={originalClass}>₹{RESUME_ORIGINAL_PRICE}</span>
    </div>
  );
}
