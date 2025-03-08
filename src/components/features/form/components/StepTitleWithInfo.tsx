import { StepTooltip, StepTooltipProps } from './StepTooltip';
import { StepBadge, StepBadgeProps } from './StepBadge';

export interface StepTitleWithInfoProps {
  /**
   * The title text to display
   */
  title: string;
  /**
   * The color scheme to use for styling (matches step colors)
   */
  colorScheme: 'teal' | 'blue' | 'amber' | 'violet';
  /**
   * Optional badge configuration
   */
  badge?: {
    label: string;
  };
  /**
   * Tooltip configuration
   */
  tooltip: {
    title: string;
    description: string;
    ariaLabel: string;
  };
}

export function StepTitleWithInfo({ 
  title, 
  colorScheme, 
  badge, 
  tooltip 
}: StepTitleWithInfoProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <span>{title}</span>
        {badge && <StepBadge label={badge.label} colorScheme={colorScheme} />}
      </div>
      <StepTooltip
        title={tooltip.title}
        description={tooltip.description}
        colorScheme={colorScheme}
        ariaLabel={tooltip.ariaLabel}
      />
    </div>
  );
} 