import React from "react"
import Image from "next/image"
import Button from "./Button"
import { FiArrowRight } from "react-icons/fi"
import clsx from "clsx"
import Link from "next/link"

type Props = {
  title: string
  image: string
  link: string
  color: "lime" | "dark"
}

const BoxLink = (props: Props) => {
  return (
    <Link
      href={props.link}
      className={clsx(
        "p-8 flex items-center flex-col gap-6 w-1/3",
        props.color === "lime" && "bg-lime",
        props.color === "dark" && "bg-dark",
      )}
    >
      <h3
        className={clsx(
          "text-5xl uppercase font-darmaGothic font-black",
          props.color === "lime" && "text-dark",
          props.color === "dark" && "text-white",
        )}
      >
        {props.title}
      </h3>
      <Image src={props.image} alt={props.title} />
      <Button type="button" className="self-end">
        <FiArrowRight className="text-xl" />
      </Button>
    </Link>
  )
}

export default BoxLink
