import type { ReactNode } from "react";


export interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
  illustrationImage?: string;
  illustrationAlt?: string;
  illustrationCaption?: string;
}