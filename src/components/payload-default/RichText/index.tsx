import React from "react"

import { serializeLexical } from "./serialize"
import clsx from "clsx"

type Props = {
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: Record<string, any>
  enableGutter?: boolean
  enableProse?: boolean
}

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null
  }

  return (
    <div
      className={clsx(
        {
          "container ": enableGutter,
          "max-w-none": !enableGutter,
          "mx-auto ": enableProse,
        },
        className,
      )}
    >
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        serializeLexical({ nodes: content?.root?.children })}
    </div>
  )
}

export default RichText
