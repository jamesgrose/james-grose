import React from "react";
import Container from "../layout/Container";
import { WorkData } from "../../utils/work";
import Date from "./Date";
import {
  FaReact,
  FaLaravel,
  FaJsSquare,
  FaVuejs,
  FaDocker,
  FaAws,
  FaDigitalOcean,
  FaStripe,
  FaFacebookMessenger,
  FaUbuntu,
  FaLinux,
  FaSalesforce,
  FaHubspot,
  FaAndroid,
  FaApple,
  FaShoppingCart,
} from "react-icons/fa";
import PageTitle from "../PageTitle";

const iconComponents = {
  js: FaJsSquare,
  vue: FaVuejs,
  react: FaReact,
  laravel: FaLaravel,
  stripe: FaStripe,
  "facebook messenger": FaFacebookMessenger,
  salesforce: FaSalesforce,
  hubspot: FaHubspot,
  docker: FaDocker,
  ubuntu: FaUbuntu,
  linux: FaLinux,
  "digital ocean": FaDigitalOcean,
  aws: FaAws,
  android: FaAndroid,
  apple: FaApple,
  cart: FaShoppingCart,
};

interface HeroProps {
  work: WorkData;
}

const Hero = ({ work }: HeroProps): JSX.Element => {
  const icons = (work.data.icons || []).map((icon, i) => {
    const Component = iconComponents[icon];
    const title = icon.charAt(0).toUpperCase() + icon.slice(1);

    if (Component) {
      return <Component key={i} className={i !== 0 && "ml-2"} title={title} />;
    }
  });

  const spacer = <div className="px-2">·</div>;

  return (
    <div>
      <Container size="sm">
        <header>
          <PageTitle>{work.data.title}</PageTitle>
          <div className="text-gray-600 text-sm py-4">
            <div className="flex items-center">
              <Date date={work.data.date} />
              {work.data.role && (
                <>
                  {spacer}
                  <div>{work.data.role}</div>
                </>
              )}
              {icons && (
                <div className="hidden md:flex items-center">
                  {spacer}
                  <div className="flex text-lg">{icons}</div>
                </div>
              )}
            </div>

            {icons && (
              <div className="md:hidden pt-2">
                <div className="flex text-lg">{icons}</div>
              </div>
            )}
          </div>
        </header>
      </Container>

      <Container size="lg" className="py-20 text-center">
        <img
          className="inline-block shadow-2xl rounded"
          src={work.data.image}
          alt={work.data.title}
        />
      </Container>
    </div>
  );
};

export default Hero;
