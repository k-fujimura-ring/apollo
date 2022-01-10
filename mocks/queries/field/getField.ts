import { graphql } from 'msw'
import { GetFieldQuery } from '../../../models/queries/field/field'

export const getField = graphql.query<GetFieldQuery>('GetField', (req, res, ctx) => {
  return res(
    ctx.data({
      field: {
        __typename: "GetField",
        name: 'アリアンツアリーナ',
        country: 'ドイツ'
      },
    }),
    ctx.delay(2000)
  )
})