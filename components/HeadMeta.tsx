import React from "react";
import Head from "next/head";

interface HeadMetaProps {
  path: string;
  title: string;
  description?: string;
  image?: string;
  published?: string;
  canonicalUrl?: string;
  children?: React.ReactNode;
}

const site = {
  url: "https://jamesgro.se",
  name: "James Grose",
  title: "James Grose",
  description: "Full stack web developer based in Melbourne",
};

const HeadMeta = ({
  title,
  description,
  path,
  image,
  published,
  canonicalUrl,
  children,
}: HeadMetaProps): JSX.Element => {
  const fullURL = (path: string): string => `${site.url}${path}`;

  const url = fullURL(path);
  image = image ? fullURL(image) : "/preview.jpg";

  const metaTags = [
    { itemprop: "name", content: title || site.title },
    { itemprop: "description", content: description || site.description },
    { itemprop: "image", content: image },
    { name: "description", content: description || site.description },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title || site.title },
    { name: "twitter:description", content: description || site.description },
    { name: "twitter:image", content: image },

    { property: "og:title", content: title || site.title },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:description", content: description || site.description },
    { property: "og:site_name", content: site.name },
  ];

  if (published) {
    metaTags.push({ name: "article:published_time", content: published });
  }

  return (
    <Head>
      <title>{title || site.title}</title>
      <link rel="canonical" href={canonicalUrl || url} />
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      {children}
    </Head>
  );
};

export default HeadMeta;
