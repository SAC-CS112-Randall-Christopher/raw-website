"use client";

import { preload } from "react-dom";

export function FontPreloads() {
  // Use React's resource hints so the SSR output contains each preload once.
  preload("/fonts/manrope-81401990.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/source-serif-4-f81edfa3.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return null;
}
