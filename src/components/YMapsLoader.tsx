import React, { FC, useEffect } from "react" 
import { useDispatch } from "react-redux"
import { loadMaps } from "../utils/initYMaps"
import { switched } from "../store/APILoadedSlice"

export const YMapsLoader: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const mapsScript: HTMLScriptElement = document.createElement("script")
    mapsScript.src = `https://api-maps.yandex.ru/3.0/?apikey=${process.env.REACT_APP_YMAPS_API_KEY}&lang=ru_RU`
    mapsScript.async = true
    mapsScript.onload = async () => {
      await loadMaps()
      dispatch(switched())
    }
    document.body.appendChild(mapsScript)
  }, [])

  return (
    <div style={{ display: "none" }}>
    </div>
  )
}