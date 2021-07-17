export interface BattlefieldMap {
  tiles: string;
  breakableBlocks: {x: number, y:number}[];
  background: {key: string, url: string};
}