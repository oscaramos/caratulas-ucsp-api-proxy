const axios = require('axios').default;
const apiUrl = "http://54.193.19.36:4000/"

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another option
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const cover = (req, res) => {
  return axios.post(apiUrl, req.body)
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(400).json({ error: `error catched on proxy: '${error}'` })
    });
}

export default allowCors(cover)
