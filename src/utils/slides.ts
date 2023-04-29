import { DEVICE_WIDTH } from "./constants"

export const getSlideWidth: () => number = () => {
  if (DEVICE_WIDTH === 320) {
    return 120
  }
  if (DEVICE_WIDTH === 720) {
    return 180
  }
  if (DEVICE_WIDTH === 1024) {
    return 340
  }
  return 400
}