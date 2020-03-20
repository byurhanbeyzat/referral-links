const { client } = require('./client')

const mutation = `mutation($url: String!, $siteName: String!) {
  createReferralLink(data: { url: $url, siteName: $siteName }) {
    _id
    url
    siteName
  }
}
`

module.exports = async (req, res) => {
  try {
    res.status(200).send(await client.request(mutation, req.body))
  } catch ({ status = 500, message, ...rest }) {
    res.status(status).json({ status, message })
  }
}
