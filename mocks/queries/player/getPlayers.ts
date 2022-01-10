import { graphql } from 'msw'
import { GetPlayersQuery } from '../../../models/queries/player/player'

export const getPlayers = graphql.query<GetPlayersQuery>('GetPlayers', (req, res, ctx) => {
  return res(
    ctx.data({
      players: [
        {
          __typename: "GetPlayers",
          position: 'FW',
          name: 'メッシ',
          team: 'パリサンジェルマン',
        },
        {
          __typename: "GetPlayers",
          position: 'FW',
          name: 'クリスティアーノ・ロナウド',
          team: 'マンチェスターユナイテッド',
        },
        {
          __typename: "GetPlayers",
          position: 'FW',
          name: 'トーマス・三浦',
          team: 'バイオリンミュンヘン',
        }
      ],
    }),
    ctx.delay(2000)
  )
})