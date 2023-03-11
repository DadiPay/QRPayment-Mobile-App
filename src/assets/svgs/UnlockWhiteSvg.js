import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const UnlockWhiteSvg = (props) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M37.5 16.667h-2.083V12.5C35.417 6.75 30.75 2.083 25 2.083S14.583 6.75 14.583 12.5h4.167A6.242 6.242 0 0 1 25 6.25a6.242 6.242 0 0 1 6.25 6.25v4.167H12.5a4.179 4.179 0 0 0-4.167 4.166v20.834a4.179 4.179 0 0 0 4.167 4.166h25a4.179 4.179 0 0 0 4.167-4.166V20.833a4.179 4.179 0 0 0-4.167-4.166Zm0 25h-25V20.833h25v20.834ZM25 35.417a4.179 4.179 0 0 0 4.167-4.167A4.179 4.179 0 0 0 25 27.083a4.179 4.179 0 0 0-4.167 4.167A4.179 4.179 0 0 0 25 35.417Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v50H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default UnlockWhiteSvg
