import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PersonSvg = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.5 3.75a2.925 2.925 0 0 1 2.917 2.917A2.925 2.925 0 0 1 12.5 9.583a2.925 2.925 0 0 1-2.917-2.916A2.925 2.925 0 0 1 12.5 3.75Zm0 14.583c3.938 0 8.458 1.882 8.75 2.917H3.75c.335-1.05 4.827-2.917 8.75-2.917Zm0-17.5a5.832 5.832 0 0 0-5.833 5.834A5.832 5.832 0 0 0 12.5 12.5a5.832 5.832 0 0 0 5.833-5.833A5.832 5.832 0 0 0 12.5.833Zm0 14.584C8.606 15.417.833 17.37.833 21.25v2.917h23.334V21.25c0-3.88-7.773-5.833-11.667-5.833Z"
      fill="#246EE9"
    />
  </Svg>
)

export default PersonSvg
