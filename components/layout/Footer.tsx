import React from "react";
import Link from "next/link";
import Container from "./Container";
import { FaKeybase, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <Container size="lg">
      <div className="flex items-center mt-20 pt-5 mb-10 border-t text-gray-700 leading-snug">
        <div className="flex-grow">
          <Link href="/">
            <a className="text-link">James Grose</a>
          </Link>
          <p>
            <a
              className="text-link"
              href="mailto:hello@jamesgro.se?subject=A+new+opportunity"
            >
              hello@jamesgro.se
            </a>
          </p>
        </div>
        <div className="flex text-xl">
          <a
            className="mr-2 text-link"
            href="https://keybase.io/jamesgrose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaKeybase />
          </a>
          <a
            className="mr-2 text-link"
            href="https://github.com/jamesgrose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="mr-2 text-link"
            href="https://www.linkedin.com/in/jamesgrose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-link"
            href="https://github.com/jamesgrose/james-grose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
