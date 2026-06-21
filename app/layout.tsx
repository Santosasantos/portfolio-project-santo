import type React from "react"
import type { Metadata } from "next"
import { Syne, Instrument_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Md. Rabiul Islam Santo — Java Full Stack Engineer",
  description:
    "Portfolio of Md. Rabiul Islam Santo — Java Full Stack Engineer with 2+ years of experience building secure, scalable enterprise systems with Java, Spring Boot, Angular, TypeScript, and PostgreSQL.",
  keywords: [
    "Java",
    "Spring Boot",
    "Full Stack Engineer",
    "Angular",
    "TypeScript",
    "Software Engineer",
    "Enterprise",
    "Groovy",
    "Grails",
    "PostgreSQL",
    "Portfolio",
    "Bangladesh",
  ].join(", "),
  openGraph: {
    title: "Md. Rabiul Islam Santo — Java Full Stack Engineer",
    description:
      "Java Full Stack Engineer building secure, scalable enterprise systems. 30% faster APIs, 95% test coverage, 99.8% uptime.",
    type: "profile",
    url: "https://www.santoosa-santos.tech/",
  },
  icons: {
    icon: [
      {
        url: "/avatar.png",
        type: "image/png",
      },
    ],
    apple: "/avatar.png",
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
        className={`${syne.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
