import { Media, User } from "@/payload-types"
import React from "react"
import RichText from "../payload-default/RichText"
import Image from "next/image"

const TeamMemberHero = (props: { user: User }) => {
  const { user } = props

  return (
    <div className="flex flex-row gap-12 max-md:flex-col-reverse">
      <div className="flex flex-col gap-4 w-3/5 max-md:w-full">
        <h1 className="font-darmaGothic text-lime uppercase text-7xl font-black">{user.name}</h1>
        <p className="text-lg font-bold">{user.title}</p>
        <p className="text-base">
          Nitrossa alkaen {user.startedAt ? new Date(user.startedAt).toLocaleDateString() : ""}
        </p>
        {user.bio && <RichText content={user.bio} enableGutter={false} />}
      </div>
      <div className="flex flex-col gap-4 w-2/5 max-md:w-full">
        {user.image && (
          <Image
            className="w-full"
            src={(user.image as Media).url ?? ""}
            alt={user.name ?? ""}
            width={(user.image as Media).sizes?.small?.width ?? 0}
            height={(user.image as Media).sizes?.small?.height ?? 0}
          />
        )}
      </div>
    </div>
  )
}

export default TeamMemberHero
