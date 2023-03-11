import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VerifyBadgeSvg = (props) => (
  <Svg
    width={38}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 .083.25 8.417v12.5c0 11.562 8 22.375 18.75 25 10.75-2.625 18.75-13.438 18.75-25v-12.5L19 .083Zm14.583 20.834c0 9.416-6.208 18.104-14.583 20.687-8.375-2.583-14.583-11.27-14.583-20.687v-9.792L19 4.645l14.583 6.48v9.792ZM9.438 22.146 6.5 25.083l8.333 8.334L31.5 16.75l-2.938-2.958L14.834 27.52l-5.396-5.375Z"
      fill="#fff"
    />
  </Svg>
)

export default VerifyBadgeSvg
