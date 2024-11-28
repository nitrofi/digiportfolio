import React, { ReactNode } from "react"
import clsx from "clsx"

export const Wrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className="w-full">
      <div className={clsx("mx-auto max-w-6xl px-4 w-full", className)}>{children}</div>
    </div>
  )
}
