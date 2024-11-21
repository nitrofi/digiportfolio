import type { Metadata } from "next"

import React from "react"

import { AdminBar } from "@/components/AdminBar"
import { Footer } from "@/Footer/Component"
import { Header } from "@/Header/Component"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { Providers } from "@/providers"
import { InitTheme } from "@/providers/Theme/InitTheme"
import { mergeOpenGraph } from "@/utilities/mergeOpenGraph"
import { draftMode } from "next/headers"

import "./globals.css"
import { getServerSideURL } from "@/utilities/getURL"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link rel="stylesheet" href="https://use.typekit.net/vwh7frp.css" />
      </head>
      <body className="font-rigid">
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}
          <LivePreviewListener />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
}
