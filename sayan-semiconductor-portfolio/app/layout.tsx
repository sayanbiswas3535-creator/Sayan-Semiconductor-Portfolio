import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayan Biswas | Semiconductor Product Marketing",
  description: "Semiconductor product marketing, connectivity, power electronics and technology go-to-market strategy.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sayan Biswas | Semiconductor Product Marketing",
    description: "Product marketing and go-to-market strategy across semiconductors, connectivity and embedded systems.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="llms-txt" href="/llms.txt" /></head><body>{children}</body></html>;
}
