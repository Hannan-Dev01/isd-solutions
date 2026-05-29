import { LucideIcon } from "lucide-react";

export const ICON_SIZE = 26;
export const ICON_STROKE = 1.75;

type SectionIconProps = {
  icon: LucideIcon;
  className?: string;
};

export function SectionIcon({ icon: Icon, className = "" }: SectionIconProps) {
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-primary-red/10 text-primary-red flex-shrink-0 ${className}`}
    >
      <Icon size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />
    </div>
  );
}
