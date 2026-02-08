import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "axis-twelve/layout.css";
import "axis-twelve/buttons.css";
import "axis-twelve/forms.css";
import "axis-twelve/modals.css";
import "axis-twelve/tables.css";
import "axis-twelve/cards.css";
import "axis-twelve/tooltips.css";
import "./globals.css";
import "./axis-utilities.css";
import LayoutWrapper from "../components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axis-Twelve Documentation",
  description: "Official documentation for Axis-Twelve CSS framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
