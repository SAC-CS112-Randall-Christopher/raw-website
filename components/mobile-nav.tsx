"use client";

import Link from "next/link";

export function MobileNav({ items, bookingLink }: {
  items: { href: string; label: string }[];
  bookingLink: string;
}) {
  return (
    <details className="mobile-nav"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}>
      <summary>Menu</summary>
      <nav aria-label="Mobile navigation">
        {items.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <a href={bookingLink} target="_blank" rel="noreferrer">Book a free 30-minute consultation</a>
        <Link href="/contact">Send a message</Link>
      </nav>
    </details>
  );
}
