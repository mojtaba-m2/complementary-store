import { ComponentProps } from "react";

type TVariant = "primary" | "secondry" | "danger" | "warning" | "success";

type TButoon = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, style, variant, ...rest }: TButoon) {
  return (
    <button style={{ ...style, ...checkVariant(variant) }} {...rest}>
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondry") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
}
