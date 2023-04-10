import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import { getMapOptions } from "../utils/getMapOptions";
import { YMap, YMapControls, YMapDefaultFeaturesLayer, YMapLayer, YMapTileDataSource, YMapZoomControl } from "../utils/initYMaps";
import { MapOptions, MapPageData } from "../utils/typing";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let map: number

const MapContainer = styled.div`
  width: 800px;
  height: 500px;
`

export const MapComponent: React.FC<{ mapData: MapPageData }> = ({ mapData }) => {
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
    <MapContainer>
      {
        APILoaded 
        ? (
          <YMap {...mapOptions.OPTIONS} ref={(x: number) => map = x}>
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
    </MapContainer>
  )
}