export const API_URL = "http://localhost:5555"
export const TABLET_WIDTH = 720
export const LAPTOP_WIDTH = 1024
export const PC_WIDTH = 1440

const getDeviceWidth: () => number = () => {
  if (window.innerWidth < 720) {
    return 320
  }
  if (window.innerWidth < 1024) {
    return 720
  }
  if (window.innerWidth < 1440) {
    return 1024
  }
  return 1440
}

export const DEVICE_WIDTH = getDeviceWidth()