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
  title: "Sujal Kachhawah",
  description:
    "Fullstack developer specializing in Next.js, Go, WebSockets, and AI. Won Smart India Hackathon 2025. Building real-time systems for the web.",
  keywords: [
    "Sujal Kachhawah",
    "fullstack developer",
    "Next.js",
    "Go",
    "WebSockets",
    "React",
    "portfolio",
    "IIIT Nagpur",
  ],
  authors: [{ name: "Sujal Kachhawah" }],
  openGraph: {
    title: "Sujal Kachhawah — Fullstack Developer",
    description:
      "Fullstack developer specializing in Next.js, Go, WebSockets, and AI. Building real-time systems for the web.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Kachhawah — Fullstack Developer",
    description:
      "Fullstack developer specializing in Next.js, Go, WebSockets, and AI. Building real-time systems for the web.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
