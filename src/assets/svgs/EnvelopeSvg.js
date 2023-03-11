import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const EnvelopeSvg = (props) => (
  <Svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M32.083 8.75a2.925 2.925 0 0 0-2.916-2.917H5.833A2.925 2.925 0 0 0 2.917 8.75v17.5a2.925 2.925 0 0 0 2.916 2.917h23.334a2.925 2.925 0 0 0 2.916-2.917V8.75Zm-2.916 0L17.5 16.042 5.833 8.75h23.334Zm0 17.5H5.833V11.667L17.5 18.958l11.667-7.291V26.25Z"
        fill="#246EE9"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h35v35H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default EnvelopeSvg
