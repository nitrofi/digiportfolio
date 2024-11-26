import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { Wrapper } from "@/components/ui/wrapper"
import { notFound } from "next/navigation"
import PersonCard from "@/components/ui/person-card"
import { User } from "@/payload-types"

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ teamSlug: string }>
}) {
  const { teamSlug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!teamSlug) return notFound()

  const teams = await payload.find({
    collection: "teams",
    where: {
      slug: {
        equals: teamSlug,
      },
    },
    depth: 2,
  })

  const team = teams.docs[0]

  if (!team) return notFound()

  const members = Array.isArray(team.teamUsers?.docs)
    ? (team.teamUsers.docs as User[])
    : ([team.teamUsers?.docs].filter(Boolean) as unknown as User[])

  return (
    <section className="bg-dark text-white py-16">
      <Wrapper>
        <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">{team.title}</h1>
        <p className="font-bold max-w-3xl">
          Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen luovaan,
          osaavaan ja hauskaan asiantuntijoiden joukkoon.
        </p>

        <div className="grid grid-cols-3 gap-10 mt-16">
          {members?.map((member: User) => <PersonCard key={member.id} user={member} />)}
        </div>
      </Wrapper>
    </section>
  )
}
