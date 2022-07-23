const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const data = new FormData();
data.append('files', fs.createReadStream('/Users/kelseygasser/documents/hackathon/images/cat.jpeg'));
data.append('name', 'My File');
data.append('metadata', '{"keyvalues": { "example": "value" }}');
data.append('wrapWithDirectory', 'false');
data.append('pinToIPFS', 'false');

const config = {
  method: 'post',
  url: 'https://managed.mypinata.cloud/api/v1/content',
  headers: { 
    'x-api-key': process.env.SUBMARINE_KEY, 
    ...data.getHeaders()
  },
  data : data
};


export default async function post() {
    try {
      const call = await axios(config);
      console.log(call);
    } catch (error) {
      console.error(error);
    }
  }

post();

