import React from "react"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import Footer from "@/components/nitro/Footer"
import { Wrapper } from "@/components/nitro/Wrapper"
import Header from "@/components/nitro/Header"
import { notFound } from "next/navigation"
import PersonCard from "@/components/nitro/PersonCard"
import { User } from "@/payload-types"

type Args = {
  params: Promise<{
    id?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  if (!id) return notFound()

  const team = await payload.findByID({
    collection: "teams",
    id,
    depth: 2,
  })

  if (!team) return notFound()

  const members = Array.isArray(team.members)
    ? (team.members as User[])
    : ([team.members].filter(Boolean) as unknown as User[])

  return (
    <>
      <main>
        <Header />
        <section className="bg-[#292929] text-white py-16">
          <Wrapper>
            <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">
              {team.title}
            </h1>
            <p className="font-bold max-w-3xl">
              Ilman ihmisiä ei olisi luovaa hybriditoimistoa. Tutustu Nitron poikkeuksellisen
              luovaan, osaavaan ja hauskaan asiantuntijoiden joukkoon.
            </p>

            <div className="grid grid-cols-3 gap-10 mt-16">
              {members?.map((member: User) => <PersonCard key={member.id} user={member} />)}
            </div>
          </Wrapper>
        </section>
        <Footer />
      </main>
    </>
  )
}
