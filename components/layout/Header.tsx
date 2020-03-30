import React from "react";
import Link from "next/link";
import Container from "./Container";

const Header = (): JSX.Element => {
  return (
    <Container size="lg">
      <div className="flex py-5 mb-20 border-b text-gray-700 leading-snug">
        <div className="flex-1">
          <Link href="/">
            <a className="text-link font-serif font-bold" title="Home">
              James Grose
            </a>
          </Link>
        </div>

        <div className="flex-1 text-right">
          <a
            className="text-link"
            href="mailto:hello@jamesgro.se?subject=A+new+opportunity"
            title="Email"
          >
            hello@jamesgro.se
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
