import '../axiosConfig'
import { queries as catalogQueries, rootResolvers as catalogRootResolvers } from '../resolvers/catalog'
import { queries as benefitsQueries } from '../resolvers/benefits'
import { mutations as checkoutMutations, queries as checkoutQueries } from '../resolvers/checkout'
import { mutations as profileMutations, queries as profileQueries, rootResolvers as profileRootResolvers } from '../resolvers/profile'
import { mutations as authMutations, queries as authQueries } from '../resolvers/auth'
import { mutations as documentMutations, queries as documentQueries } from '../resolvers/document'
import { mutations as sessionMutations } from '../resolvers/session'
// tslint:disable-next-line:no-var-requires
Promise = require('bluebird')
Promise.config({ longStackTraces: true })

export const resolvers = {
  ...catalogRootResolvers,
  ...profileRootResolvers,
  Query: {
    ...catalogQueries,
    ...benefitsQueries,
    ...profileQueries,
    ...checkoutQueries,
    ...documentQueries,
    ...authQueries,
  },
  Mutation: {
    ...profileMutations,
    ...checkoutMutations,
    ...authMutations,
    ...documentMutations,
    ...sessionMutations
  },
}
