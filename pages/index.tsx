import React from "react";
import { GetStaticProps } from "next";
import chunk from "lodash/chunk";
import HeadMeta from "../components/HeadMeta";
import { getAllWorks, WorkData } from "../utils/work";
import WorkCard from "../components/WorkCard";
import Container from "../components/layout/Container";
import BaseLayout from "../components/layout/BaseLayout";
import PageTitle from "../components/PageTitle";

interface HomeProps {
  works: WorkData[];
}

const Home = (props: HomeProps): JSX.Element => {
  return (
    <BaseLayout header={true}>
      <HeadMeta path="/" />

      <Container size="lg">
        <PageTitle
          className="my-20"
          subtitle="A full stack web developer and tech lead based in Melbourne, Australia"
        >
          Hi, I&apos;m <span className="text-blue-700">James&nbsp;Grose</span>
        </PageTitle>

        {chunk(props.works, 2).map((row, i) => (
          <div key={i} className="flex mb-10">
            <WorkCard work={row[0]} className="flex-1 mr-2" />
            <WorkCard work={row[1]} className="flex-1 ml-2" />
          </div>
        ))}
      </Container>
    </BaseLayout>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const works = await getAllWorks();

  return {
    props: {
      works,
    },
  };
};

export default Home;
