const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const data = new FormData();

const config = {
  method: 'post',
  url: 'https://managed.mypinata.cloud/api/v1/content',
  headers: { 
    'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY, 
    ...data.getHeaders()
  },
  data : data
};


export default async function post(file, name, description) {
  data.append('files', file);
  data.append('name', name);
  data.append('metadata', '{"keyvalues": { "description": "' + description + '"}}');
  data.append('wrapWithDirectory', 'false');
  data.append('pinToIPFS', 'false');
    try {
      const call = await axios(config);
    } catch (error) {
      console.error(error);
    }
  }



