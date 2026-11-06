import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customer Intelligence & Hesitation Portal",
  description:
    "Ekora Wholesale customer intelligence dashboard tracking customer hesitation, wholesale tier confusion, shipping thresholds, and automated WhatsApp sales recovery.",
  openGraph: {
    title: "Customer Intelligence & Hesitation Portal",
    description:
      "Ekora Wholesale customer intelligence dashboard tracking customer hesitation, wholesale tier confusion, shipping thresholds, and automated WhatsApp sales recovery.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
