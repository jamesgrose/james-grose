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
  FaCloud,
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
  "google cloud": FaCloud,
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
        <header className="text-center">
          <PageTitle>{work.data.title}</PageTitle>

          <div className="text-gray-600 text-sm py-4">
            <div className="flex items-center justify-center">
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
              <div className="md:hidden pt-1">
                <div className="flex justify-center text-lg">{icons}</div>
              </div>
            )}
          </div>
        </header>
      </Container>

      <Container size="lg" className="flex items-center flex-wrap py-20">
        <img
          className="md:w-2/3 shadow-2xl rounded"
          src={work.data.image}
          alt={work.data.title}
        />

        <div className="md:w-1/3 pt-4 md:pt-0 md:pl-4 z-10">
          {work.data.client && (
            <>
              <div className="text-gray-600 font-semibold mb-1">Client</div>
              <p className="mb-4">{work.data.client}</p>
            </>
          )}

          {work.data.role && (
            <>
              <div className="text-gray-600 font-semibold mb-1">Role</div>
              <p className="mb-4">{work.data.role}</p>
            </>
          )}

          {work.data.technology && (
            <>
              <div className="text-gray-600 font-semibold mb-1">
                Technologies
              </div>
              <p className="mb-4">{work.data.technology}</p>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
