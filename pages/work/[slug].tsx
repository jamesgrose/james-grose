import fs from "fs";
import path from "path";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import HeadMeta from "../../components/HeadMeta";
import Hero from "../../components/work/Hero";
import renderers from "../../components/markdown/renderers";

interface MarkdownDocument {
  data: { [key: string]: any };
  content: string;
}

interface WorkProps extends MarkdownDocument {
  path: string;
  next?: MarkdownDocument[];
}

const Work = (props: WorkProps): JSX.Element => {
  const { title, date } = props.data;

  return (
    <div>
      <HeadMeta path={props.path} title={title} />

      <Hero title={title} date={date} />

      <div className="my-10">
        <ReactMarkdown
          className="markdown"
          source={props.content}
          renderers={renderers}
        />
      </div>

      {props.next && props.next.length > 0 && <div>NEXT</div>}
    </div>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps<WorkProps> = async (context) => {
  const { slug } = context.params;

  // Import our .md file using the `slug` from the URL
  const file = await import(`../../content/work/${slug}.md`);
  const data = matter(file.default);

  return {
    props: {
      path: `/work/${slug}`,
      data: data.data,
      content: data.content,
    },
  };
};

// This function gets called at build time
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const workDirectory = path.join(process.cwd(), "content/work");
  const files = fs.readdirSync(workDirectory);

  // Get the paths we want to pre-render based on the file names
  const paths = files.map((fileName) => ({
    params: { slug: fileName.split(".")[0] },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default Work;
