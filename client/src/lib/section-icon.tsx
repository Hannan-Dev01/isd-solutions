import { LucideIcon } from "lucide-react";

export const ICON_SIZE = 24;
export const ICON_STROKE = 1.75;

type SectionIconProps = {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { box: "w-10 h-10", icon: 20 },
  md: { box: "w-12 h-12", icon: ICON_SIZE },
  lg: { box: "w-14 h-14", icon: 28 },
};

export function SectionIcon({ icon: Icon, className = "", size = "md" }: SectionIconProps) {
  const s = sizeMap[size];
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-primary-red/10 text-primary-red flex-shrink-0 transition-transform duration-300 ${s.box} ${className}`}
    >
      <Icon size={s.icon} strokeWidth={ICON_STROKE} aria-hidden="true" />
    </div>
  );
}
