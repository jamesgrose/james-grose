import React from "react";
import Head from "next/head";

interface HeadMetaProps {
  path: string;
  title?: string;
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

  title = title ? `${title} · ${site.title}` : site.title;

  const metaTags = [
    { itemProp: "name", content: title },
    { itemProp: "description", content: description || site.description },
    { itemProp: "image", content: image },
    { name: "description", content: description || site.description },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description || site.description },
    { name: "twitter:image", content: image },

    { property: "og:title", content: title },
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

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2b6cb0" />
      <meta name="msapplication-TileColor" content="#2b6cb0" />
      <meta name="theme-color" content="#dae1e7" />

      {children}
    </Head>
  );
};

export default HeadMeta;
