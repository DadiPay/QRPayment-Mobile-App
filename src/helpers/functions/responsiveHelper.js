import { Dimensions, PixelRatio } from "react-native"

const { width, height } = Dimensions.get("window")

export const widthPercentageToDP = (widthPercent) => {
  const screenWidth = width
  // Convert string input to decimal number
  const elemWidth =
    typeof widthPercent === "string"
      ? parseFloat(widthPercent)
      : widthPercent
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
}

export const heightPercentageToDP = (heightPercent) => {
  const screenHeight = height
  // Convert string input to decimal number
  const elemHeight =
    typeof heightPercent === "string"
      ? parseFloat(heightPercent)
      : heightPercent
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
}
