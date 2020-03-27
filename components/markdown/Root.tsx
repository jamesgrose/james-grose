import React from "react";
import NarrowContainer from "../layout/NarrowContainer";

interface RootProps {
  children: React.ReactNode;
}

const Root = (props: RootProps): JSX.Element => {
  return (
    <NarrowContainer
      size="md"
      className="markdown text-gray-900 leading-relaxed"
    >
      {props.children}
    </NarrowContainer>
  );
};

export default Root;
