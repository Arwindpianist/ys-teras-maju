import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "YS Teras Maju (M) Sdn Bhd - IT, M&E & Civil Solutions",
  description:
    "Your Trusted Partner in IT Solutions, Mechanical & Electrical Services, and Civil Works across Malaysia",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "YS Teras Maju (M) Sdn Bhd - IT, M&E & Civil Solutions",
    description:
      "Your Trusted Partner in IT Solutions, Mechanical & Electrical Services, and Civil Works across Malaysia",
    url: "https://ys-teras-maju.com",
    siteName: "YS Teras Maju (M) Sdn Bhd",
    images: [
      {
        url: "/ys-teras-maju-high-resolution-logo.png",
        width: 1200,
        height: 630,
        alt: "YS Teras Maju (M) Sdn Bhd - IT, M&E & Civil Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YS Teras Maju (M) Sdn Bhd - IT, M&E & Civil Solutions",
    description:
      "Your Trusted Partner in IT Solutions, Mechanical & Electrical Services, and Civil Works across Malaysia",
    images: ["/ys-teras-maju-high-resolution-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
