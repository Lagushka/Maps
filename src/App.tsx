import React from 'react';
import { useSelector } from 'react-redux';
import { dataSourceProps, layerProps, OPTIONS } from './utils/constants';
import { YMap, YMapControls, YMapDefaultFeaturesLayer, YMapLayer, YMapTileDataSource, YMapZoomControl } from './utils/initYMaps';
import { RootState } from './store/store';

let map: number

function App() {
  const APILoaded = useSelector((state: RootState) => state.APILoaded.APILoaded)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {
        APILoaded
          ? (
            <YMap {...OPTIONS} ref={(x: number) => map = x}>
              <YMapTileDataSource {...dataSourceProps} />
              <YMapLayer {...layerProps} />
              <YMapDefaultFeaturesLayer />
              <YMapControls position="right">
                <YMapZoomControl />
              </YMapControls>
            </YMap>
          )
          : null
      }
    </div>
  )
}

export default App;
