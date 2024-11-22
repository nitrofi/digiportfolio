import React from "react"
import { Case, Customer, Media } from "@/payload-types"
import Image from "next/image"
import Button from "./button"

type Props = {
  case: Case
}

const CaseCard = ({ case: caseItem }: Props) => {
  if (typeof caseItem.customer === "number") {
    return null
  }

  console.log(caseItem.image)

  return (
    <article className="flex flex-col gap-3">
      {caseItem.image && (
        <div className="aspect-video relative bg-gray-100">
          <Image
            src={(caseItem.image as Media).sizes?.small?.url || ""}
            alt={caseItem.title || ""}
            fill
          />
        </div>
      )}
      <h3 className="font-darmaGothic text-[#222222] uppercase text-4xl font-black">
        {caseItem.title}
      </h3>
      <p className="font-bold">{caseItem.customer?.name}</p>
      <p>{caseItem.startedAt ? new Date(caseItem.startedAt).toLocaleDateString() : ""}</p>
      <div className="flex gap-2 flex-wrap">
        <div className="bg-lime py-2 px-5 rounded-full">
          Kompleksisuus {caseItem.complexity || "1"}
        </div>
        <div className="bg-blue-600 py-2 px-5 rounded-full text-white">
          Laajuus {caseItem.wideness || "1"}
        </div>
      </div>
    </article>
  )
}

export default CaseCard
