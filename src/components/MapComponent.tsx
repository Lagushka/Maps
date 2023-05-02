import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import { getMapOptions } from "../utils/getMapOptions";
import { YMap, YMapControls, YMapDefaultFeaturesLayer, YMapLayer, YMapTileDataSource, YMapZoomControl } from "../utils/initYMaps";
import { MapOptions, MapPageData } from "../utils/typing";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let map: number

const MapContainer = styled.div<{ fullScreen: boolean }>`
  width: ${props => props.fullScreen ? "100vw" : "80%"};
  height: ${props => props.fullScreen ? "100vh" : "500px"};
  position: ${props => props.fullScreen ? "absolute" : "relative"};
`

const FullscreenButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: 12px;
  top: 12px;
  border: none;
  padding: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0px #00000044;
`

interface Props {
  mapData: MapPageData,
  fullScreen: boolean,
  setFullScreen: (fullScreen: boolean) => void
}

export const MapComponent: React.FC<Props> = ({ mapData, fullScreen, setFullScreen }) => {
  const APILoaded = useSelector((state: RootState) => state.APILoaded.APILoaded)
  const [mapOptions, setMapOptions] = useState<MapOptions>({
    dataSourceProps: {
      id: "",
      raster: {
          type: "",
          fetchTile: ""
      },
      zoomRange: { min: 0, max: 0 },
      clampMapZoom: true,
    },
    layerProps: {
      id: "",
      source: "",
      type: "",
      options: {
          raster: {
              awaitAllTilesOnFirstDisplay: true
          }
      }
    },
    OPTIONS: {
      location: { center: [], zoom: 0 },
      projection: null,
      mode: "",
      restrictMapArea: [],
      worldOptions: { cycledX: false, cycledY: false },
    },
    worldSize: 0
  })
  
  useEffect(() => {
    if (APILoaded) {
      const [dataSourceProps, layerProps, OPTIONS, worldSize] = getMapOptions(mapData)
      setMapOptions({
        dataSourceProps,
        layerProps,
        OPTIONS,
        worldSize
      })
    }
  }, [APILoaded])

  return (
    <MapContainer fullScreen={fullScreen}>
      {
        APILoaded 
        ? (
          <YMap { ...mapOptions.OPTIONS } ref={(x: number) => map = x}>
            <YMapTileDataSource {...mapOptions.dataSourceProps} />
            <YMapLayer {...mapOptions.layerProps} />
            <YMapDefaultFeaturesLayer />
            <YMapControls position="right">
              <YMapZoomControl />
            </YMapControls>
          </YMap>
        )
        : null
      }
      <FullscreenButton onClick={() => {setFullScreen(!fullScreen)}}>
        {
          fullScreen
          ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m122 976-42-42 298-298H180v-60h300v300h-60V678L122 976Zm358-400V276h60v198l298-298 42 42-298 298h198v60H480Z"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M120 936V636h60v198l558-558H540v-60h300v300h-60V318L222 876h198v60H120Z"/></svg>
        }
      </FullscreenButton>
    </MapContainer>
  )
}