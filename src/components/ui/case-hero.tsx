import { Case, Media } from "@/payload-types"
import React from "react"
import RichText from "../payload-default/RichText"
import Image from "next/image"
import { Wrapper } from "./wrapper"
import Link from "next/link"

const CaseHero = ({ caseData }: { caseData: Case }) => {
  return (
    <>
      <div className="w-full h-[400px] relative bg-dark">
        {caseData.image && (
          <Image
            className="object-cover"
            src={(caseData.image as Media).url ?? ""}
            alt={caseData.title ?? ""}
            fill
            priority
          />
        )}
      </div>
      <Wrapper className="flex flex-row gap-4 py-16">
        <div className="flex flex-col gap-4 w-3/5 max-md:w-full">
          <h1 className="font-darmaGothic text-dark uppercase text-7xl font-black">
            {caseData.title}
          </h1>
          {caseData.customer && typeof caseData.customer === "object" && (
            <p className="text-blue-600 font-bold">{caseData.customer.name}</p>
          )}
          {caseData.startedAt && (
            <p className="text-neutral-400">
              Aloitettu {new Date(caseData.startedAt).toLocaleDateString()}
            </p>
          )}
          {caseData.introduction && (
            <RichText content={caseData.introduction} enableGutter={false} />
          )}
          {caseData.customer &&
            typeof caseData.customer === "object" &&
            caseData.customer.website && (
              <Link className="text-blue-600 underline" href={caseData.customer.website}>
                {caseData.customer.website}
              </Link>
            )}
        </div>
        <div className="flex flex-col gap-2 w-2/5">
          {caseData.keypoints && (
            <RichText content={caseData.keypoints} enableGutter={false} enableProse={false} />
          )}
          <div className="flex gap-2 flex-wrap">
            {caseData.complexity && (
              <div className="bg-lime py-2 px-5 rounded-full">
                Kompleksisuus {caseData.complexity || "1"}
              </div>
            )}
            {caseData.wideness && (
              <div className="bg-blue-600 py-2 px-5 rounded-full text-white">
                Laajuus {caseData.wideness || "1"}
              </div>
            )}
            {caseData.isPublic && (
              <div className="bg-green-600 py-2 px-5 rounded-full text-white">Julkinen refe</div>
            )}
            {!caseData.isPublic && (
              <div className="bg-red-600 py-2 px-5 rounded-full text-white">Ei julkinen refe</div>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default CaseHero
