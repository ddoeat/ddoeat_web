export interface Coordinate {
  lat: number;
  lng: number;
}

export interface StoreIds {
  storeId?: number;
  kakaoStoreId?: number;
}

export type CoordinateWithIds = Coordinate & StoreIds;
