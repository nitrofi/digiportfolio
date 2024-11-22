import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import Footer from "@/components/ui/footer"
import { Wrapper } from "@/components/ui/wrapper"
import Header from "@/components/ui/header"
import { notFound } from "next/navigation"
import PersonCard from "@/components/ui/person-card"
import { User } from "@/payload-types"
import TeamMemberHero from "@/components/ui/team-member-hero"
import TeamMemberTags from "@/components/ui/team-member-tags"

type Args = {
  params: Promise<{
    id?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!id) return notFound()

  const user = await payload.findByID({
    collection: "users",
    id,
    depth: 2,
  })

  if (!user) return notFound()

  return (
    <section className="bg-dark text-white py-16">
      <Wrapper>
        <TeamMemberHero user={user} />
        <TeamMemberTags user={user} />
      </Wrapper>
    </section>
  )
}
