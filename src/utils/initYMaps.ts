import React, { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { OPTIONS, PIC_HEIGHT, PIC_WIDTH, worldSize } from "./constants"
import { DataSource, Layer, YMaps } from "./typing";

declare let ymaps3: any

export let YMap: FC<PropsWithChildren<YMaps>>, YMapLayer: FC<Layer>, YMapTileDataSource: FC<DataSource>, YMapDefaultFeaturesLayer: FC, YMapControls: FC<PropsWithChildren<{position: string}>>, YMapZoomControl: FC

export const loadMaps = async () => {
  const [ymaps3React] = await Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]);
  const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
  ({ YMap, YMapLayer, YMapTileDataSource, YMapDefaultFeaturesLayer, YMapControls } = reactify.module(ymaps3));

  // const {YMapDefaultMarker} = reactify.module(await ymaps3.import('@yandex/ymaps3-markers@0.0.1'));
  ({YMapZoomControl} = reactify.module(await ymaps3.import('@yandex/ymaps3-controls@0.0.1')));
  const {Cartesian} = await ymaps3.import('@yandex/ymaps3-cartesian-projection@0.0.1');

  OPTIONS.projection = new Cartesian([
    [-PIC_WIDTH / 2, PIC_HEIGHT / 2 - worldSize],
    [worldSize - PIC_WIDTH / 2, PIC_HEIGHT / 2],
  ]);
}