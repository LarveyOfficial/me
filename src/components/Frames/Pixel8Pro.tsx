import React from "react"

export default function Pixel8Pro({
  children,
  svgClassName,
  objectClassName,
  innerClassName,
}: {
  children: React.ReactNode
  svgClassName?: string
  objectClassName?: string
  innerClassName?: string
}) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 765 1626"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <g transform="translate(0 222.2)">
        <g>
          <rect y="-222.2" width="760" height="1626" rx="85" ry="85" />
          <rect x="15" y="-205.95" width="730" height="1593.5" rx="50" ry="70" fill="#333" />
          <rect x="27.5" y="-195.95" width="705" height="1573.5" rx="60" ry="60" fill="#ddd" />
          <circle cx="380" cy="-156.2" r="20" fill="#333" />
        </g>
        <path d="m760 293.8v95" fill="none" stroke="#000" strokeWidth="10" />
        <path d="m760 473.8v195" fill="none" stroke="#000" strokeWidth="10" />
        <foreignObject
          transform="translate(0 -222.2)"
          className={classes("w-full h-full", objectClassName)}
        >
          <div className="w-full h-full pr-1.5">
            <div className={classes("w-full h-full p-[1.6rem]", innerClassName)}>{children}</div>
          </div>
        </foreignObject>
      </g>
    </svg>
  )
}
