import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps): JSX.Element => {
  // Render media without the paragraph wrapper
  if (children && children[0] && children[0].props && children[0].props.src) {
    return <p>{children}</p>;
  }

  return <p className="max-w-screen-sm mx-auto px-4">{children}</p>;
};

export default Paragraph;
