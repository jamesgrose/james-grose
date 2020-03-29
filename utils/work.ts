import path from "path";
import fs from "fs";
import matter from "gray-matter";

export interface WorkData {
  data: {
    title: string;
    date: string;
    description: string;
    image: string;
    client?: string;
    icons?: string[];
    role?: string;
  };
  slug: string;
  content: string;
}

function sortWork(
  works: WorkData[],
  order: "asc" | "desc" = "desc"
): WorkData[] {
  return works.sort((a, b) => {
    const dateA = a.data.date;
    const dateB = b.data.date;

    if (dateA < dateB) {
      return order === "desc" ? 1 : -1;
    }

    if (dateA > dateB) {
      return order === "asc" ? 1 : -1;
    }

    return 0;
  });
}

export function getFileNames(): string[] {
  const workDirectory = path.join(process.cwd(), "content/work");

  return fs.readdirSync(workDirectory);
}

export async function getWorkData(name: string): Promise<WorkData> {
  name = name.split(".")[0]; // Remove the file extension if it exists

  const file = await import(`../content/work/${name}.md`);
  const data = matter(file.default);

  return {
    slug: name,
    data: data.data as WorkData["data"],
    content: data.content,
  };
}

/**
 * Get all work in chronological order.
 */
export async function getAllWorks(): Promise<WorkData[]> {
  const works = await Promise.all(
    getFileNames().map(async (file) => {
      return await getWorkData(file);
    })
  );

  return sortWork(works, "desc");
}

/**
 * Get the next 2 work items.
 */
export async function getNextWork(
  currentSlug: string
): Promise<[WorkData, WorkData]> {
  currentSlug = currentSlug.split(".")[0]; // Remove the file extension if it exists
  const works = await getAllWorks();

  const index = works.findIndex((work) => work.slug === currentSlug);

  return [works[(index + 1) % works.length], works[(index + 2) % works.length]];
}
