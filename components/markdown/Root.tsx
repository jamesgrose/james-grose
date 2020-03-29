import React from "react";
import Container from "../layout/Container";

interface RootProps {
  children: React.ReactNode;
}

const Root = (props: RootProps): JSX.Element => {
  return (
    <Container size="lg" className="markdown text-gray-900 leading-relaxed">
      {props.children}
    </Container>
  );
};

export default Root;
