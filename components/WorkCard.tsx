import React from "react";
import Link from "next/link";
import { WorkData } from "../utils/work";
import Date from "./work/Date";

interface WorkCardProps {
  className?: string;
  work: WorkData;
}

const WorkCard = (props: WorkCardProps): JSX.Element => {
  const { work, className = "" } = props;

  return (
    <Link href="/work/[slug]" as={`/work/${work.slug}`}>
      <a className={`flex flex-col text-link ${className}`}>
        <div className="shadow-2xl mb-6 rounded overflow-hidden">
          <img
            className="relative object-cover w-full h-32 md:h-64 z-10"
            src={work.data.image}
            alt={work.data.title}
          />
        </div>

        <div className="flex-grow relative pb-6 z-10">
          <h2 className="font-serif font-semibold text-xl">
            {work.data.title}
          </h2>

          <p className="my-1 text-gray-900">{work.data.description || ""}</p>

          <div className="flex absolute bottom-0 text-gray-600 font-semibold">
            <Date date={work.data.date} />
            {work.data.client && (
              <>
                <div className="px-2">·</div>
                <div>{work.data.client}</div>
              </>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;
