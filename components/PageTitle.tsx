import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

const PageTitle = (props: PageTitleProps): JSX.Element => {
  return (
    <div className={props.className}>
      <h1 className="font-serif font-semibold text-5xl leading-none">
        {props.children}
      </h1>
      {props.subtitle && <p className="pt-4 md:pt-2">{props.subtitle}</p>}
    </div>
  );
};

export default PageTitle;
