import React from "react";
import { AppProps } from "next/app";
import { Router } from "next/router";
import * as gtag from "../lib/gtag";

// Import global CSS
import "../styles/index.css";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export function reportWebVitals({ id, name, label, value }): void {
  gtag.event({
    action: name,
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    label: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    value: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
