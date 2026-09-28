"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

type LandingCtaProps = {
  primaryLabel?: string;
  showSignIn?: boolean;
};

export function LandingCta({
  primaryLabel = "Get started free",
  showSignIn = true,
}: LandingCtaProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <SignUpButton mode="modal">
        <Button size="lg">{primaryLabel}</Button>
      </SignUpButton>
      {showSignIn ? (
        <SignInButton mode="modal">
          <Button size="lg" variant="outline">
            Sign in
          </Button>
        </SignInButton>
      ) : null}
    </div>
  );
}
