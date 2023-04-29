import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapComponent } from "../components/MapComponent";
import { API_URL } from "../utils/constants";
import { MapPageData } from "../utils/typing";
import { PageWrapper } from "../containers/PageWrapper";

export const MapPage: React.FC = () => {
  const [mapData, setMapData] = useState<MapPageData>({
    id: 0,
    name: "",
    MAX_ZOOM: 0,
    MIN_ZOOM: 0,
    PIC_WIDTH: 0,
    PIC_HEIGHT: 0,
  })
  const [fullScreen, setFullScreen] = useState<boolean>(false)

  const { mapId } = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/map/${mapId}`)
    .then((response) => {
      setMapData(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return ( 
    <>
      {
        !fullScreen 
        ? 
        <PageWrapper>
          <h1>{ mapData.name }</h1>
          <MapComponent mapData={ mapData } fullScreen={ fullScreen } setFullScreen={ setFullScreen } />
        </PageWrapper>
        : 
        <MapComponent mapData={ mapData } fullScreen={ fullScreen } setFullScreen={ setFullScreen } /> 
      }
    </>
  )
}