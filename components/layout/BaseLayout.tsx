import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { className = "", header = true } = props;

  return (
    <div className={`bg-gray-100 py-1 ${className}`}>
      {header && <Header />}

      {props.children}

      <Footer />
    </div>
  );
};

export default BaseLayout;
