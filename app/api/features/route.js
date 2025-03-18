import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "features.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return new Response(fileData, { headers: { "Content-Type": "application/json" } });
}

