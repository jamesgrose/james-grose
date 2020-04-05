import React from "react";
import { AppProps } from "next/app";
import { Router } from "next/router";
import * as gtag from "../lib/gtag";

// Import global CSS
import "../styles/index.css";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
