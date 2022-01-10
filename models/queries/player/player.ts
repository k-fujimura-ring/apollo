export interface GetPlayersQuery {
  players: {
    __typename: string
    name: string
    team: string
    position: string
  }[]
}