import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import HeadMeta from "../../components/HeadMeta";
import Hero from "../../components/work/Hero";
import renderers from "../../components/markdown/renderers";
import {
  getFileNames,
  getNextWork,
  getWorkData,
  WorkData,
} from "../../utils/work";
import WorkCard from "../../components/WorkCard";
import Container from "../../components/layout/Container";
import BaseLayout from "../../components/layout/BaseLayout";

interface WorkProps extends WorkData {
  path: string;
  next?: WorkData[];
}

const Work = (props: WorkProps): JSX.Element => {
  const { title } = props.data;

  return (
    <BaseLayout>
      <HeadMeta path={props.path} title={title} />

      <Hero work={props} />

      <div className="my-10">
        <ReactMarkdown
          className="markdown"
          source={props.content}
          renderers={renderers}
          escapeHtml={false}
        />
      </div>

      {props.next && props.next.length === 2 && (
        <Container size="lg">
          <div className="flex items-center mt-32 mb-20">
            <div className="flex-grow border-t" />
            <div className="text-gray-500 font-bold tracking-wide mx-4">More</div>
            <div className="flex-grow border-t" />
          </div>

          <div className="flex">
            <WorkCard className="flex-1 mr-2" work={props.next[0]} />
            <WorkCard className="flex-1 ml-2" work={props.next[1]} />
          </div>
        </Container>
      )}
    </BaseLayout>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps<WorkProps> = async (context) => {
  let { slug } = context.params;
  slug = Array.isArray(slug) ? slug[0] : slug;

  // Import our .md file using the `slug` from the URL
  const work = await getWorkData(slug);

  return {
    props: {
      ...work,
      path: `/work/${slug}`,
      next: await getNextWork(slug),
    },
  };
};

// This function gets called at build time
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on the file names
  const paths = getFileNames().map((fileName) => ({
    params: { slug: fileName.split(".")[0] },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default Work;
