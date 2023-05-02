import React, { FC, useEffect } from "react" 
import { useDispatch } from "react-redux"
import { loadMaps } from "../utils/initYMaps"
import { switched } from "../store/APILoadedSlice"
import { API_URL } from "../utils/constants"

export const YMapsLoader: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const mapsScript: HTMLScriptElement = document.createElement("script")
    mapsScript.src = `${API_URL}/init`
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