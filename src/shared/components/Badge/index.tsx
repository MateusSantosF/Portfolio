import clsx from "clsx";
import styles from "./styles.module.scss";

type BadgeColors = "primary" | "secondary" | "gold" | "violet" | "stone";

function Badge({ value, color }: { value: string; color: BadgeColors }) {
  const Component = () => {
    return (
      <span className={clsx(styles["badge"], styles[`color-${color}`])}>
        {value}
      </span>
    );
  };
  return <Component />;
}

export default Badge;
