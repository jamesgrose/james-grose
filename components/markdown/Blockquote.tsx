import React from "react";

interface BlockquoteProps {
  children: React.ReactNode;
}

const Blockquote = (props: BlockquoteProps): JSX.Element => {
  const children =
    props.children &&
    props.children[0] &&
    props.children[0].props &&
    props.children[0].props.children &&
    props.children[0].props.children[0].props.children ? (
      <p>{props.children[0].props.children[0].props.children}</p>
    ) : (
      props.children
    );

  return (
    <blockquote className="font-serif font-medium italic text-2xl leading-tight border-l-4 pl-4 max-w-screen-md">
      {children}
    </blockquote>
  );
};

export default Blockquote;
