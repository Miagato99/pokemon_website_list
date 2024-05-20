import { FC, HTMLProps } from "react";
import "../../styles/button.scss"
import classNames from "classnames";
const Button: FC<IButtonProps & HTMLProps<HTMLButtonElement>> = ({
  btnText,
  iconSuffix,
  type,
  className,
  ...props
}) => {
  const buttonClasses= classNames("btn-wrapper", className)
  return (
    <button type={type} {...props} className={buttonClasses}>
      {btnText}
    </button>
  );
};

export default Button;
