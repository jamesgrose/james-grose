import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
}

const Container = (props: ContainerProps): JSX.Element => {
  const { size = "sm", className } = props;

  // The full class names must be specified so that they aren't purged
  function width(size): string {
    switch (size) {
      case "xl":
        return "max-w-screen-xl";
      case "lg":
        return "max-w-screen-lg";
      case "md":
        return "max-w-screen-md";
      default:
        return "max-w-screen-sm";
    }
  }

  return (
    <div className={`${width(size)} mx-auto px-4 ${className}`}>
      {props.children}
    </div>
  );
};

export default Container;
