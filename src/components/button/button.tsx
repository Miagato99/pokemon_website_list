import { FC, HTMLProps } from "react";
import { IButtonProps } from "./button-types";
import "./button.scss";

const Button: FC<IButtonProps & HTMLProps<HTMLButtonElement>> = ({
  btnText,
  iconSuffix,
  type,
  ...props
}) => {
  return (
    <button type={type} {...props} className="btn-wrapper">
      {btnText}
    </button>
  );
};

export default Button;
