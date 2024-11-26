import { Media, User } from "@/payload-types"
import Image from "next/image"
import React from "react"
import TagLink from "./tag-link"
import Link from "next/link"
import clsx from "clsx"

const PersonCard = (props: { user: User; whiteTile?: boolean }) => {
  const { user, whiteTile = false } = props

  if (typeof user.team === "number") {
    return null
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <Link href={`/team/${user.team?.slug}/${user.slug}`}>
        {user.image && (
          <Image
            src={(user.image as Media).url ?? ""}
            alt={user.name ?? ""}
            width={500}
            height={500}
          />
        )}
        {!user.image && <div className="w-full h-full bg-gray-200"></div>}
      </Link>
      <div>
        <h3 className="text-5xl font-bold text-lime font-darmaGothic uppercase">{user.name}</h3>
        <p className={clsx("text-base font-bold", whiteTile && "text-white")}>{user.title}</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {user.tags?.map((tag) => {
          if (typeof tag === "object") {
            return <TagLink key={tag.id} tag={tag} />
          }
          return null
        })}
      </div>
    </div>
  )
}

export default PersonCard
