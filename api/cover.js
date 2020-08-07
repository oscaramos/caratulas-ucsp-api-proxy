const axios = require('axios').default;
const apiUrl = "http://54.193.19.36:4000/"

export default (req, res) => {
  return axios.post(apiUrl, req.body)
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(400).json({ error: `error catched on proxy: '${error}'` })
    });
}
