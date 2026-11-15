"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { recordMarketingEvent } from "../lib/marketing-client";

export function MarketingMeasurement() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      recordMarketingEvent("page_view");
    }
  }, [pathname]);
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.href === "https://calendar.app.google/Qwnjw6tS5TdDo5Hh7") recordMarketingEvent("booking_click");
      if (url.hostname === "connectedfrontiers.com") recordMarketingEvent("connected_frontiers_click");
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
