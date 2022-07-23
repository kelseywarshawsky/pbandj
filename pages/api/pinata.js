const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

export default async function handler(req, res) {
  const file = req.body.file;
  const name = req.body.name;
  const description = req.body.description;

  const data = new FormData();

  data.append('files', file);
  data.append('name', name);
  data.append('metadata', '{"keyvalues": { "description": "' + description + '"}}');
  data.append('wrapWithDirectory', 'false');
  data.append('pinToIPFS', 'false');
  console.log('hi');
  console.log(data);
  axios(config)
  .then(res => {
    const persons = res.data;
    this.setState({ persons });
    console.log(persons)
  })

  const config = {
    method: 'post',
    url: 'https://managed.mypinata.cloud/api/v1/content',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY,
      'content-type': 'multipart/form-data',
      ...data.getHeaders()
    },
    data: data
  };

  return res.json;
}
