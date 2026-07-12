import type { ReactNode } from "react";

export type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText?: string;
  footerLinkText: string;
  footerHref: string;
};