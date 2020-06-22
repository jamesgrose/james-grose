/* eslint-disable @typescript-eslint/camelcase */

export const GA_TRACKING_ID = "UA-162855715-1";

declare global {
  interface Window {
    gtag: any;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
  nonInteraction,
}): void => {
  const data: { [key: string]: any } = {
    event_category: category,
    event_label: label,
    value: value,
  };

  if (nonInteraction) {
    data.non_interaction = true;
  }

  window.gtag("event", action, data);
};
