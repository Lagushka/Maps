import { ReactNode } from "react";

export interface YMaps {
  children: ReactNode,
  ref: (arg0: number) => void
}

export interface DataSource {
  id: string;
  raster: {
    type: string;
    fetchTile: string;
  };
  zoomRange: {
    min: number;
    max: number;
  };
  clampMapZoom: boolean;
}

export interface Layer {
  id: string;
  source: string;
  type: string;
  options: {
    raster: {
      awaitAllTilesOnFirstDisplay: boolean;
    };
  };
}

export interface TopMapData {
  id: number,
  name: string
}

export interface MapPageData extends TopMapData {
  MAX_ZOOM: number,
  MIN_ZOOM: number,
  PIC_WIDTH: number,
  PIC_HEIGHT: number
}

export interface Options {
  location: { 
    center: number[], 
    zoom: number
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projection: any,
  mode: string,
  restrictMapArea: number[][],
  worldOptions: {
    cycledX: boolean,
    cycledY: boolean 
  },
}

export interface MapOptions {
  dataSourceProps: DataSource,
  layerProps: Layer,
  OPTIONS: Options,
  worldSize: number
}