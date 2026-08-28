"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, ShoppingBag } from "@/components/icons";
import { Logo } from "@/components/logo";
import { useCart } from "@/components/cart-context";
import { PROGRAMS } from "@/lib/content";

export function Header() {
  const { setOpen, count } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link aria-label="Reform Vital home" href="/">
          <Logo variant="header" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div className="relative">
            <button
              type="button"
              aria-expanded={treatmentsOpen}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setTreatmentsOpen((v) => !v)}
            >
              Treatments
              <ChevronDown className="size-4" />
            </button>
            {treatmentsOpen ? (
              <div className="absolute top-full left-0 z-50 mt-1 min-w-56 rounded-xl border border-border bg-background p-2 shadow-lift">
                {PROGRAMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-secondary"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    {item.shortName}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link href="/how-it-works" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            How It Works
          </Link>
          <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            About
          </Link>
          <Link href="/faq" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            FAQ
          </Link>
          <Link href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="relative rounded-md p-2.5 text-foreground hover:bg-secondary"
            aria-label="Shopping cart"
            onClick={() => setOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute top-1 right-1 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            ) : null}
          </button>
          <Link href="/treatments" className="rv-cta ml-1 hidden rounded-full px-5 py-2.5 text-sm font-semibold lg:inline-block">
            Get Started
          </Link>
          <button
            type="button"
            className="rounded-md p-2.5 text-foreground hover:bg-secondary lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div id="mobile-nav" className="border-b border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {PROGRAMS.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
                {item.shortName}
              </Link>
            ))}
            <Link href="/how-it-works" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
              How It Works
            </Link>
            <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
              About
            </Link>
            <Link href="/faq" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
              FAQ
            </Link>
            <Link href="/contact" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
              Contact
            </Link>
            <Link href="/treatments" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
              Get Started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
