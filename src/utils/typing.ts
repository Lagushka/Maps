import { ReactNode } from "react";

export interface YMaps {
  children: ReactNode,
  ref: (arg0: number) => void
}

export type DataSource = {
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