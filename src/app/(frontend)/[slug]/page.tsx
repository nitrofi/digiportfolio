import type { Metadata } from "next"

import { PayloadRedirects } from "@/components/payload-default/PayloadRedirects"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { draftMode } from "next/headers"
import React, { cache } from "react"
import { homeStatic } from "@/endpoints/seed/home-static"

import type { Page as PageType } from "@/payload-types"

import { RenderBlocks } from "@/blocks/RenderBlocks"

import { generateMeta } from "@/utilities/generateMeta"

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== "home"
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "home" } = await paramsPromise
  const url = "/" + slug

  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === "home") {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = page

  return (
    <>
      <PayloadRedirects disableNotFound url={url} />
      <RenderBlocks blocks={layout} />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = "home" } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: "pages",
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
