import React from "react";

interface NarrowContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
}

const NarrowContainer = (props: NarrowContainerProps): JSX.Element => {
  const { size = "sm", className } = props;

  return (
    <div className={`max-w-screen-${size} mx-auto px-4 ${className}`}>
      {props.children}
    </div>
  );
};

export default NarrowContainer;
