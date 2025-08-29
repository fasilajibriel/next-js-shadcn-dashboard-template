"use client";

import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";
import * as React from "react";

type Variant = "login" | "signup" | "otp" | "custom";

type Props = {
  /** Large heading above the message/CTA */
  title?: string;
  /** Screen reader brand name + optional visible brand next to the icon */
  brandName?: string;
  /** Override the icon (any Lucide or your own) */
  logoIcon?: React.ElementType;
  /** Switches the default message/CTA logic */
  variant?: Variant;

  /** Override the whole message area (shown instead of the variant default) */
  messageOverride?: React.ReactNode;

  /**
   * When using variant "login" or "signup", you can override the default CTA text/href.
   * For variant "custom", you can supply either `messageOverride` or these CTA values.
   */
  ctaTextOverride?: string;
  ctaHrefOverride?: string;

  /** Hide the CTA/message entirely (useful for OTP or very minimal screens) */
  hideMessageArea?: boolean;

  /** Optional className passthrough */
  className?: string;
};

export default function AuthFormHeader({
  title = "Welcome to Acme Inc.",
  brandName = "Acme Inc.",
  logoIcon: Logo = GalleryVerticalEnd,
  variant = "login",
  messageOverride,
  ctaTextOverride,
  ctaHrefOverride,
  hideMessageArea,
  className = "",
}: Props) {
  // Decide default CTA based on variant
  let message: React.ReactNode = null;
  if (!hideMessageArea) {
    if (messageOverride) {
      message = messageOverride;
    } else {
      if (variant === "login") {
        const text = ctaTextOverride ?? "Sign up";
        const href = ctaHrefOverride ?? "/auth/signup";
        message = (
          <>
            Don&apos;t have an account?{" "}
            <Link href={href} className="underline underline-offset-4">
              {text}
            </Link>
          </>
        );
      } else if (variant === "signup") {
        const text = ctaTextOverride ?? "Sign in";
        const href = ctaHrefOverride ?? "/auth/login";
        message = (
          <>
            Already have an account?{" "}
            <Link href={href} className="underline underline-offset-4">
              {text}
            </Link>
          </>
        );
      } else if (variant === "otp") {
        // Default: show nothing for OTP
        message = null;
      } else if (variant === "custom") {
        // If you want a simple CTA in custom mode:
        if (ctaTextOverride && ctaHrefOverride) {
          message = (
            <Link
              href={ctaHrefOverride}
              className="underline underline-offset-4"
            >
              {ctaTextOverride}
            </Link>
          );
        } else {
          message = null;
        }
      }
    }
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Link href="/" className="flex flex-col items-center gap-2 font-medium">
        <div className="flex size-8 items-center justify-center rounded-md">
          <Logo className="size-6" />
        </div>
        <span className="sr-only">{brandName}</span>
      </Link>

      <h1 className="text-xl font-bold">{title}</h1>

      {message ? <div className="text-center text-sm">{message}</div> : null}
    </div>
  );
}
