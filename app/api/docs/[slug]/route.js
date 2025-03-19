import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default async function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.join(process.cwd(), "docs", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Documentation not found" });
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return res.status(200).json({ mdxSource });
}

