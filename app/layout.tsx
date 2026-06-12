import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Archivo, Spline_Sans_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
})

export const metadata: Metadata = {
  title: "Md. Rabiul Islam Santo — Java Backend Engineer",
  description:
    "Portfolio of Md. Rabiul Islam Santo — Java Backend Engineer with 2+ years of experience building secure, scalable enterprise systems with Java, Spring Boot, Groovy, and PostgreSQL.",
  keywords: [
    "Java",
    "Spring Boot",
    "Backend Engineer",
    "Software Engineer",
    "Enterprise",
    "Groovy",
    "Grails",
    "PostgreSQL",
    "Portfolio",
    "Bangladesh",
  ].join(", "),
  openGraph: {
    title: "Md. Rabiul Islam Santo — Java Backend Engineer",
    description:
      "Java Backend Engineer building secure, scalable enterprise systems. 30% faster APIs, 95% test coverage, 99.8% uptime.",
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
      <body
        className={`${fraunces.variable} ${archivo.variable} ${splineSansMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
