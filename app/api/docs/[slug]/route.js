import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function GET(req, context) {
  try {
    const { params } = context;
    const { slug } = await params;
    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug parameter" }), { status: 400 });
    }

    const filePath = path.join(process.cwd(), "docs", `${slug}.mdx`);
    console.log("📂 Checking file:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("❌ File not found:", filePath);
      return new Response(JSON.stringify({ error: "Documentation not found" }), { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    if (!fileContent.trim()) {
      console.error("⚠ Empty MDX file:", filePath);
      return new Response(JSON.stringify({ error: "MDX file is empty" }), { status: 500 });
    }

    const { content } = matter(fileContent);
    const mdxSource = await serialize(content);

    return new Response(JSON.stringify({ mdxSource }), { status: 200 });
  } catch (error) {
    console.error("🚨 API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}

