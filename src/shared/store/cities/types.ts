/* Action types */
export enum CitiesTypes {
  CHANGE_CITY = '@cities/CHANGE_CITY',
}

/* Data types */
export interface ICities {
  currentID: string,
  states: [],
  cities: []
}

/* State type */
export interface CitiesState {
  readonly currentID: string
  readonly states: { id: string, name: string }[]
  readonly cities: { id: string, name: string }[]
}
