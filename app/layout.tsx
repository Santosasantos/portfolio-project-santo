import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md. Rabiul Islam Santo - Java Full Stack Engineer | Portfolio",
  description:
    "Professional portfolio of Md. Rabiul Islam Santo - Java Full Stack Software Engineer specializing in Spring Boot, Angular, enterprise architecture, and scalable systems. Currently seeking Software Engineer roles.",
  keywords: [
    "Java",
    "Spring Boot",
    "Angular",
    "Full Stack",
    "Software Engineer",
    "Enterprise",
    "Groovy",
    "Grails",
    "Portfolio",
    "Bangladesh",
  ].join(", "),
  generator: "v0.app",
  openGraph: {
    title: "Md. Rabiul Islam Santo - Java Full Stack Engineer",
    description:
      "Enterprise-grade software architect with proven track record delivering scalable systems for 10K+ users.",
    type: "profile",
    url: "https://santo-portfolio.vercel.app",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
