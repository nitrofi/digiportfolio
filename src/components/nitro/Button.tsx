import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

const Button = (props: Props) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <Type must be passed explicitly>
    <button
      {...props}
      className={clsx('px-7 py-4 bg-white rounded-full text-[#222222]', props.className)}
    >
      {props.children}
    </button>
  )
}

export default Button
