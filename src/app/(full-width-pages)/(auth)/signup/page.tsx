import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Booking Admin",
  description: "Booking Admin panel",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
