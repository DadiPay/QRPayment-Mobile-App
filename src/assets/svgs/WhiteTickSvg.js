import * as React from "react"
import Svg, { Path } from "react-native-svg"

const WhiteTickSvg = (props) => (
  <Svg
    width={8}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.588 1.25-3.64 3.938-1.654-1.79"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default WhiteTickSvg
