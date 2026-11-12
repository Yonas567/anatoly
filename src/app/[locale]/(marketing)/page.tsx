import LandingPage from "@/components/marketing/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShieldGuard Security | Professional guarding in Ethiopia",
  description:
    "Request security services, submit feedback, and track your case with ShieldGuard.",
};

export default function HomePage() {
  return <LandingPage />;
}
