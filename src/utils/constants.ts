import { DataSource, Layer } from "./typing";

export const API_URL = "http://localhost:5555"

const TILES_PATH = `${process.env.PUBLIC_URL}./tiles`;

const MAX_ZOOM = 10;
const MIN_ZOOM = 8;
export const PIC_WIDTH = 11811;
export const PIC_HEIGHT = 3850;

export const dataSourceProps: DataSource = {
    id: 'custom',
    raster: {
        type: 'ground',
        fetchTile: TILES_PATH + '/{{z}}/tile-{{x}}-{{y}}.jpg'
    },
    zoomRange: { min: MIN_ZOOM, max: MAX_ZOOM },
    clampMapZoom: true,
};

export const layerProps: Layer = {
    id: 'customLayer',
    source: 'custom',
    type: 'ground',
    options: {
        raster: {
            awaitAllTilesOnFirstDisplay: true
        }
    }
}

// Вычисляем размер всех тайлов на максимальном зуме.
export const worldSize = Math.pow(2, MAX_ZOOM) * 256;

// Ограничиваем зону прокрутки нашей карты - размером всего изображения
const RESTRICT_AREA = [
    [-PIC_WIDTH / 2, -PIC_HEIGHT / 2],
    [PIC_WIDTH / 2, PIC_HEIGHT / 2],
];

export const OPTIONS = {
    location: { center: [0, 0], zoom: MIN_ZOOM },
    projection: null,
    mode: 'raster',
    restrictMapArea: RESTRICT_AREA,
    worldOptions: { cycledX: false, cycledY: false },
};

