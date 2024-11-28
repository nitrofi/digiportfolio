import { Tag } from "@/payload-types"
import React from "react"
import RichText from "../payload-default/RichText"
import { Wrapper } from "./wrapper"

const TagHero = ({ tagData }: { tagData: Tag }) => {
  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-5 gap-8 py-16">
          <div className="col-span-3 flex flex-col gap-4 max-md:col-span-full">
            <h1 className="font-darmaGothic text-dark uppercase text-7xl font-black">
              {tagData.title}
            </h1>
            {tagData.content && (
              <RichText
                className="flex flex-col gap-2"
                content={tagData.content}
                enableGutter={false}
                enableProse={false}
              />
            )}
          </div>
          <div className="col-span-2 flex flex-col gap-2 max-md:hidden">
            <h2 className="font-darmaGothic text-dark uppercase text-6xl font-black">
              Keskeiset asiat
            </h2>
            {tagData.keypoints && (
              <RichText content={tagData.keypoints} enableGutter={false} enableProse={false} />
            )}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default TagHero
