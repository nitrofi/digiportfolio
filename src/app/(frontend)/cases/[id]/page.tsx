import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { Wrapper } from "@/components/ui/wrapper"
import { notFound } from "next/navigation"
import CaseHero from "@/components/ui/case-hero"

type Args = {
  params: Promise<{
    id?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!id) return notFound()

  const caseData = await payload.findByID({
    collection: "cases",
    id,
    depth: 2,
  })

  if (!caseData) return notFound()

  return <CaseHero caseData={caseData} />
}
