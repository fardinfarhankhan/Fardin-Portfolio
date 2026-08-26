import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { SiteNav } from "@/components/chrome/SiteNav";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { RouteTransition } from "@/components/motion/RouteTransition";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { PROFILE } from "@/data/profile";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://fardinfarhankhan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fardin Farhan Khan | Transportation | Data | Research",
    template: "%s | Fardin Farhan Khan",
  },
  description:
    "Fardin Farhan Khan works at the intersection of transportation engineering, data analysis, and research — civil engineering, mobility, and problem solving across disciplines.",
  openGraph: {
    title: "Fardin Farhan Khan | Transportation | Data | Research",
    description:
      "Engineer. Researcher. Data Analyst. Transportation Professional. Problem Solver.",
    url: siteUrl,
    siteName: "Fardin Farhan Khan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fardin Farhan Khan | Transportation | Data | Research",
    description:
      "Engineer. Researcher. Data Analyst. Transportation Professional. Problem Solver.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  email: PROFILE.email,
  jobTitle: "Assistant Manager, Business Development",
  worksFor: {
    "@type": "Organization",
    name: "SMEC International Pty Ltd.",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [PROFILE.social.linkedin, PROFILE.social.researchgate, PROFILE.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeScript />
        <ThemeProvider>
          <MotionRoot>
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <RouteTransition />
            <CustomCursor />
            <SiteNav />
            <main id="main" className="flex-1">
              {children}
            </main>
            <CinematicFooter />
          </MotionRoot>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
