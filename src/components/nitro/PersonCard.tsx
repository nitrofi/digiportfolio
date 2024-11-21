import { Media, Tag, User } from "@/payload-types"
import Image from "next/image"
import React from "react"
import TagLink from "./TagLink"

type Props = {
  user: User
}

const PersonCard = (props: Props) => {
  const { user } = props

  console.log(user.tags)

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        {user.image && (
          <Image
            src={(user.image as Media).url ?? ""}
            alt={user.name ?? ""}
            width={500}
            height={500}
          />
        )}
        {!user.image && <div className="w-full h-full bg-gray-200"></div>}
      </div>
      <div>
        <h3 className="text-5xl font-bold text-lime font-darmaGothic uppercase">{user.name}</h3>
        <p className="text-base font-bold">{user.title}</p>
      </div>
      <div className="flex gap-4">
        {user.tags?.docs?.map((tag) => {
          if (typeof tag === "object") {
            return <TagLink key={tag.id} tag={tag} link={`/tagit/${tag.id}`} />
          }
          return null
        })}
      </div>
    </div>
  )
}

export default PersonCard
