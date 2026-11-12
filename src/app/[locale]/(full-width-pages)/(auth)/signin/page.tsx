import SignIn from "@/components/others/auth/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | ShieldGuard",
  description: "Demo sign-in for client, guard, supervisor, and operations roles.",
};

export default function SignInPage() {
  return <SignIn />;
}
