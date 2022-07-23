const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const data = new FormData();
data.append('files', fs.createReadStream('/Users/kelseygasser/documents/hackathon/images/cat.jpeg'));
data.append('name', 'My File');
data.append('metadata', '{"keyvalues": { "example": "value" }}');
data.append('wrapWithDirectory', 'false');
data.append('pinToIPFS', 'false');

console.log(process.env.SUBMARINE_KEY);

const config = {
  method: 'post',
  url: 'https://managed.mypinata.cloud/api/v1/content',
  headers: { 
    'x-api-key': 'AIFUlXOCMKZVE6QtmJhQI5V4ZEQ8yxso', 
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

