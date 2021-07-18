export interface BattlefieldMap {
  tiles: string;
  breakableBlocks: {x: number, y:number}[];
  background: {key: string, url: string};
}

export interface MapInfo {
  mapID: number;
  name: string;
}