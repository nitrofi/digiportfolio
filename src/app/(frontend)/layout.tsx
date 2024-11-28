import type { Metadata } from "next"

import React from "react"

import { LivePreviewListener } from "@/components/payload-default/LivePreviewListener"

import "./globals.css"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import Breadcrumbs from "@/components/ui/breadcrumbs"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link rel="stylesheet" href="https://use.typekit.net/vwh7frp.css" />
      </head>
      <body className="font-rigid">
        <LivePreviewListener />
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
}
