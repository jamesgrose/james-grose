import React from "react";
import { parseISO, format } from "date-fns";
import NarrowContainer from "../layout/NarrowContainer";

interface HeroProps {
  title: string;
  date: string;
}

const Hero = (props: HeroProps): JSX.Element => {
  const date = format(parseISO(props.date), "Do MMM, yyyy");

  return (
    <NarrowContainer>
      <header>
        <h1 className="font-serif font-semibold text-5xl leading-tight">
          {props.title}
        </h1>
        <div className="py-4 text-gray-600">{date}</div>
      </header>
    </NarrowContainer>
  );
};

export default Hero;
