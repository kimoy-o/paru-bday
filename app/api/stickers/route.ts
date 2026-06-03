import { readdir } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dir = join(
      process.cwd(),
      "public",
      "resources",
      "photos",
      "stickers"
    );
    const files = await readdir(dir);
    const images = files.filter((f) =>
      /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(f)
    );
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([]);
  }
}
