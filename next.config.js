require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  env: {
    ENV: process.env.NODE_ENV,
    DB_SECRET_KEY: process.env.DB_SECRET_KEY,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
})
