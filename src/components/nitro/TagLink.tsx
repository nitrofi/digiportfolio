import React from "react"
import { Tag } from "@/payload-types"
import Link from "next/link"

type Props = {
  tag: Tag
  link: string
}

const TagLink = (props: Props) => {
  const { tag, link } = props
  return (
    <Link className="rounded-full bg-white text-black px-4 py-2" href={link}>
      {tag.title}
    </Link>
  )
}

export default TagLink
