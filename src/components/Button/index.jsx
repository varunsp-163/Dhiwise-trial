import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[14px]" };
const variants = {
  fill: {
    indigo_300: "bg-indigo-300 text-white-A700",
    deep_purple_600: "bg-deep_purple-600 shadow-bs",
    pink_400: "bg-pink-400 text-white-A700",
    indigo_900: "bg-indigo-900 text-indigo-300",
  },
  outline: {
    indigo_300: "border border-indigo-300 border-solid text-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[15px]", md: "p-[35px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "indigo_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_300",
    "deep_purple_600",
    "pink_400",
    "indigo_900",
  ]),
};

export { Button };
