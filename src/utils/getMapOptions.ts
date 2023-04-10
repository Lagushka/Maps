import { API_URL } from "./constants"
import { Cartesian } from "./initYMaps"
import { DataSource, Layer, MapPageData, Options } from "./typing"

export const getMapOptions: (mapData: MapPageData) => [DataSource, Layer, Options, number ] = (mapData) => {
  const dataSourceProps: DataSource = {
    id: 'custom',
    raster: {
        type: 'ground',
        fetchTile: `${API_URL}/map/${mapData.id}/tiles/{{z}}/{{x}}/{{y}}`
    },
    zoomRange: { min: mapData.MIN_ZOOM, max: mapData.MAX_ZOOM },
    clampMapZoom: true,
  }

const layerProps: Layer = {
    id: 'customLayer',
    source: 'custom',
    type: 'ground',
    options: {
        raster: {
            awaitAllTilesOnFirstDisplay: true
        }
    }
}

const worldSize: number = Math.pow(2, mapData.MAX_ZOOM) * 256;

// Ограничиваем зону прокрутки нашей карты - размером всего изображения
const RESTRICT_AREA: number[][] = [
    [-mapData.PIC_WIDTH / 2, -mapData.PIC_HEIGHT / 2],
    [mapData.PIC_WIDTH / 2, mapData.PIC_HEIGHT / 2],
];

const OPTIONS: Options = {
    location: { center: [0, 0], zoom: mapData.MIN_ZOOM },
    projection: new Cartesian([
      [-mapData.PIC_WIDTH / 2, mapData.PIC_HEIGHT / 2 - worldSize],
      [worldSize - mapData.PIC_WIDTH / 2, mapData.PIC_HEIGHT / 2],
    ]),
    mode: 'raster',
    restrictMapArea: RESTRICT_AREA,
    worldOptions: { cycledX: false, cycledY: false },
};

  return ([dataSourceProps, layerProps, OPTIONS, worldSize])
}