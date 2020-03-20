const { client } = require('./client')

const query = `query Link($siteName: String!) {
  link(siteName: $siteName) {
    _id
    url
    siteName
  }
}`

module.exports = async (req, res) => {
  try {
    const result = await client.request(query, req.body)
    res.status(200).send(result)
  } catch ({ status = 500, message, ...rest }) {
    res.status(status).json({ status, message })
  }
}
