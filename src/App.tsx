import React from 'react';
import { useSelector } from 'react-redux';
import { YMap, YMapControls, YMapDefaultFeaturesLayer, YMapLayer, YMapTileDataSource, YMapZoomControl } from './utils/initYMaps';
import { RootState } from './store/store';

let map: number

function App() {
  const APILoaded = useSelector((state: RootState) => state.APILoaded.APILoaded)

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
     
    </div>
  )
}

export default App;
