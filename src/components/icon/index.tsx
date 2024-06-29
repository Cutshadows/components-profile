import Icons from "./icons";
import { PointerEvents } from "./index.type";
import styles from "./index.module.css";

export type IconProps = {
  pointerEvents?: PointerEvents;
  color?: string;
  size?: number;
  name?: keyof typeof Icons;
  animation?: 'rotate' | 'asc' | 'desc';
  variant?: 'rounded-edge-box' | 'tag';
};

const Icon = ({
  color = "inherit",
  size = 24,
  pointerEvents = "none",
  name = "ArrowLeftFill",
  animation,
  variant,
}: IconProps) => {
  const Component = Icons[name];
  const getColor = (color: string) => {
    if (color.startsWith('--')) return `var(${color})`;
    return color;
  }
  const getStyle = () => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      fill: getColor(color),
      pointerEvents: `${pointerEvents}`,
    } as React.CSSProperties;
  };

  if (variant) {
    return (
      <div className={styles.container} data-variant={variant} data-component="icon">
        <i
          className={styles.i}
          style={getStyle()}
          data-animation={animation}
          data-testid="icon"
        >
          <Component />
        </i>
      </div>
    );
  }
  return (
    <i
      className={styles.i}
      style={getStyle()}
      data-animation={animation}
      data-testid="icon"
      data-component="icon"
    >
      <Component />
    </i>
  );
};
export default Icon;
