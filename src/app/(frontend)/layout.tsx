import type { Metadata } from "next"

import React from "react"

import { LivePreviewListener } from "@/components/payload-default/LivePreviewListener"

import { draftMode } from "next/headers"

import "./globals.css"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link rel="stylesheet" href="https://use.typekit.net/vwh7frp.css" />
      </head>
      <body className="font-rigid">
        {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}
        <LivePreviewListener />
        <Header />
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
