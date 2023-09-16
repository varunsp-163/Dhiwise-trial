import React from "react";

const sizeClasses = {
  txtOpenSans14: "font-normal font-opensans",
  txtCairoBold16Deeppurple600: "font-bold font-cairo",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold14Pink400: "font-opensans font-semibold",
  txtCairoBold18Deeppurple600: "font-bold font-cairo",
  txtOpenSansRomanSemiBold14RedA200: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold14Green500: "font-opensans font-semibold",
  txtOpenSansBold16: "font-bold font-opensans",
  txtCairoBold20: "font-bold font-cairo",
  txtCairoSemiBold18: "font-cairo font-semibold",
  txtCairoRegular14: "font-cairo font-normal",
  txtCairoSemiBold18Indigo300: "font-cairo font-semibold",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtCairoBold24: "font-bold font-cairo",
  txtOpenSansRomanSemiBold14Lightblue300: "font-opensans font-semibold",
  txtCairoBold14: "font-bold font-cairo",
  txtCairoBold28: "font-bold font-cairo",
  txtCairoBold14Gray90001: "font-bold font-cairo",
  txtCairoBold16: "font-bold font-cairo",
  txtCairoBold18: "font-bold font-cairo",
  txtOpenSansRomanSemiBold14Gray50001: "font-opensans font-semibold",
  txtCairoSemiBold18Bluegray700: "font-cairo font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
