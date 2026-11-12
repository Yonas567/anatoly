import GuardCheckInPanel from "@/components/guard/check-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guard Check-in | ShieldGuard",
};

export default function GuardPage() {
  return <GuardCheckInPanel />;
}
