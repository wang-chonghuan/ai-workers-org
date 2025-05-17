'use client'

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function SiteHeader() {
  return (
    <header className="p-4 flex justify-end">
      <SignedOut>
        <SignInButton />
        <span className="ml-4">
          <SignUpButton />
        </span>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
} 