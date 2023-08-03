import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogpostDir = path.join(process.cwd(), "blogcontent");

export function fetchSortPostData() {
  const filename = fs.readdirSync(blogpostDir);
  const allPostData = filename.map((file) => {
    // Remove file extension to use file name as id
    const id = file.replace(/\.md$/, "");
    const filePath = path.join(blogpostDir, file);
    // Get content in the file
    const fileContent = fs.readFileSync(filePath, "utf-8");
    // Use gray-matter to parse the metadata section in each post
    const matterResult = matter(fileContent);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return blogPost;
  });
  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function fetchPostData(id: string) {
  let fileContent;
  const fileFullPath = path.join(blogpostDir + `/${id}.md`);
  if (!fs.existsSync(fileFullPath)) {
    return undefined;
  } else {
    fileContent = fs.readFileSync(fileFullPath, "utf-8");
  }
  const matterResult = matter(fileContent);

  // Process file content to html format
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPost: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPost;
}
