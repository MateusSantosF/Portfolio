import { ButtonHTMLAttributes, ReactElement } from "react";
import styles from "./styles.module.scss"
import clsx from "clsx";
import { LuLoader2 } from "react-icons/lu";


type TButtonProps = {
	size?: "xs" | "sm" | "md" | "lg";
	rounded?: boolean;
	variant?: "solid" | "bordered";
	color?: "primary" | "secondary";
	isLoading?: boolean;
	isIconButton?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;	

function Button({...props }: TButtonProps): ReactElement {

  const {
		className,
		children,
		type = "button",
		size = "md",
		variant = "solid",
		color = "primary",
		rounded = false,
		isIconButton = false,
		isLoading = false,
		disabled,
		...rest
	} = props;
  
  const Component = () => {
		return (
			<button
				type={type}
				disabled={isLoading || disabled}
				className={clsx(
					styles["button"],
					styles[`color-${color}`],
					styles[`size-${size}`],
					styles[`variant-${variant}`],
					{
						[styles["rounded"]]: rounded,
						[styles["icon-button"]]: isIconButton,
					},
					className,
				)}
				{...rest}
			>
				{isLoading && <LuLoader2 className="block animate-spin text-sm" />}
				{isLoading ? (isIconButton ? null : children) : children}
			</button>
		);
	};
  
  return <Component />;
}

export default Button;
