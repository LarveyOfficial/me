import React from "react"

export default function PixelTablet({
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1427 935" className={svgClassName}>
      <rect id="Bezel" fill="#efedee" width="1427" height="935" rx="58" ry="58" />
      <path
        id="Screen"
        fill="#ddd"
        d="M69.011,50H1357.99a19,19,0,0,1,19,19V865a19,19,0,0,1-19,19H69.011a19,19,0,0,1-19-19V69A19,19,0,0,1,69.011,50Z"
      />
      <foreignObject className={classes("w-full h-full", objectClassName)}>
        <div className={classes("w-full h-full p-[3.20rem]", innerClassName)}>{children}</div>
      </foreignObject>
      <ellipse
        id="LED"
        stroke="#fff"
        strokeWidth="1px"
        cx="659.969"
        cy="20.688"
        rx="5.25"
        ry="5.25"
      />
      <circle
        id="Camera"
        stroke="#fff"
        strokeWidth="1px"
        fill="#333"
        cx="716.125"
        cy="20.969"
        r="8.313"
      />
    </svg>
  )
}
