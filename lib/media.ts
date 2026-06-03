const VIDEO_BASE =
  (process.env.NEXT_PUBLIC_VIDEO_BASE_URL ?? "").replace(/\/$/, "");

export function r(...segments: string[]): string {
  const filename = segments[segments.length - 1];
  if (filename.endsWith(".mp4") && VIDEO_BASE) {
    // R2 bucket is flat — just the filename, no subdirectory structure
    return `${VIDEO_BASE}/${encodeURIComponent(filename)}`;
  }
  return "/resources/" + segments.map(encodeURIComponent).join("/");
}
