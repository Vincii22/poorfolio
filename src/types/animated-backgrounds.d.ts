declare module "animated-backgrounds" {
  import * as React from "react";

  export interface AnimatedBackgroundProps {
    animationName?: string;
    theme?: string;
    interactive?: boolean;
    interactionConfig?: {
      effect?: string;
      strength?: number;
      radius?: number;
      continuous?: boolean;
    };
    style?: React.CSSProperties;
    className?: string;
  }

  export const AnimatedBackground: React.FC<AnimatedBackgroundProps>;
}
