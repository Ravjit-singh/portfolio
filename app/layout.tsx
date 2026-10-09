import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAVJIT SINGH | Full-Stack Software Engineer",
  description: "Portfolio of Ravjit Singh, a Full-Stack Developer specializing in high-performance web applications, robust Node.js architectures, and seamless Next.js deployments.",
  keywords: ["Ravjit Singh", "Full Stack Developer", "Software Engineer", "React", "Next.js", "Portfolio", "Chandigarh", "Node.js"],
  authors: [{ name: "Ravjit Singh" }],
  creator: "Ravjit Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravjit.me", // Update if using a custom domain
    title: "RAVJIT SINGH | Full-Stack Software Engineer",
    description: "Portfolio of Ravjit Singh, specializing in high-performance web applications and robust architectures.",
    siteName: "Ravjit Singh Portfolio",
    images: [
      {
        url: "/og-image.png", // We will create this next
        width: 1200,
        height: 630,
        alt: "Ravjit Singh Portfolio Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAVJIT SINGH | Full-Stack Software Engineer",
    description: "Portfolio of Ravjit Singh, specializing in high-performance web applications and robust architectures.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
