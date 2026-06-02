//"use client"

import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";
import { useAuth } from "@/hooks/useAuth";


export const metadata: Metadata = {
  title: "Sign In | Booking Admin",
  description: "Booking Admin panel",
};

export default function SignIn() {
  
  //return <SignInForm handleLoginIn={handleSignIn}/>;
  return <SignInForm />;
}
