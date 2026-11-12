"use client";

import { buttonVariants } from "@/components/ui/button";
import ThemeToggler from "@/layout/header/theme-toggler";
import { Link, usePathname } from "@/i18n/navigation";
import { useAuth } from "@/context/auth-context";
import { homePathForRole } from "@/lib/demo-auth";
import { cn } from "@/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/request-service", label: "Request Service" },
  { href: "/feedback", label: "Feedback" },
  { href: "/track", label: "Track" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const { session } = useAuth();

  return (
    <header className="sticky top-0 z-99 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand-500 text-white font-semibold">
            SS
          </span>
          <div className="hidden sm:block">
            <p className="text-title-sm font-semibold text-gray-900 dark:text-white">
              ShieldGuard
            </p>
            <p className="text-theme-xs text-gray-500 dark:text-gray-400">
              Professional security services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggler />
          {session ? (
            <Link
              href={homePathForRole(session.user.role)}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/signin"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Sign in
            </Link>
          )}
          <Link
            href="/request-service"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Request a Service
          </Link>
        </div>
      </div>
    </header>
  );
}
