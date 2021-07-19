export interface BattlefieldMap {
  _id?: string;
  tiles: string;
  breakableBlocks: {x: number, y:number}[];
  background: {key: string, url: string};
}

export interface MapInfo {
  mapID: number;
  name: string;
}

export interface Dto<T> {
  info?: string;
  data?: T
}