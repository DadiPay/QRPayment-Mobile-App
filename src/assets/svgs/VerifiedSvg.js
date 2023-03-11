import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VerifiedSvg = (props) => (
  <Svg
    width={33}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m32.083 15.298-3.558-4.069.496-5.381-5.265-1.196L21 0l-4.958 2.13L11.083 0 8.327 4.652 3.063 5.833l.495 5.396L0 15.298l3.558 4.069-.495 5.395 5.264 1.196 2.756 4.667 4.959-2.144L21 30.611l2.756-4.653 5.265-1.195-.496-5.382 3.558-4.083Zm-5.76 2.158-.817.948.117 1.24.262 2.844-2.77.627-1.225.277-.642 1.079-1.444 2.45-2.596-1.123-1.166-.496-1.152.496-2.596 1.123-1.444-2.436-.642-1.079-1.225-.277-2.77-.627.262-2.858.117-1.24-.817-.948-1.881-2.143 1.881-2.159.817-.948-.132-1.254-.262-2.83 2.77-.626 1.226-.277.641-1.08 1.444-2.45 2.596 1.123 1.167.496 1.152-.495L19.79 3.69l1.443 2.45.642 1.079 1.225.277 2.77.627-.262 2.844-.116 1.24.816.947 1.882 2.144-1.867 2.158Z"
      fill="#246EE9"
    />
    <Path
      d="m13.256 17.865-3.383-3.398-2.158 2.173 5.541 5.556L23.96 11.462 21.802 9.29l-8.546 8.575Z"
      fill="#246EE9"
    />
  </Svg>
)

export default VerifiedSvg