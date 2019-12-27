export interface Hero {
  Name: string;
  PowerStats: PowerStats;
  Appearance: Appearance;
  Image: string;

}

export interface PowerStats {
  Intelligence: number;
  Strength: number;
  Speed: number;
  Durability: number;
  Power: number;
  Combat: number;
}

export interface Appearance {
  Gender: string;
  Race: string;
  Height: string;
  Weight: string;
}


