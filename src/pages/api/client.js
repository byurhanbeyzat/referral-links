const { GraphQLClient } = require('graphql-request')

exports.client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
  credentials: 'include',
  mode: 'cors',
  headers: {
    Authorization: `Bearer ${process.env.DB_SECRET_KEY}`,
  },
})
