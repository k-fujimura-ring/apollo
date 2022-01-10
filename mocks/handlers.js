import { getField } from './queries/field/getField'
import { getPlayers } from './queries/player/getPlayers'

export const handlers = [
  getPlayers,
  getField
]