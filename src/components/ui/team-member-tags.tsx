import React from "react"
import TagLink from "./tag-link"
import { User } from "@/payload-types"

const TeamMemberTags = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col gap-4 mt-16">
      <h2 className="font-darmaGothic uppercase text-6xl font-black">Työkalut ja teknologiat</h2>
      <div className="flex flex-row gap-4">
        {user.tags?.map((tag) => {
          if (typeof tag === "object" && "id" in tag) {
            return <TagLink tag={tag} key={tag.id} />
          }
        })}
      </div>
    </div>
  )
}

export default TeamMemberTags
