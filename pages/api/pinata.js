const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const data = new FormData();

export default function handler(req, res) {
  const { file, name, description } = req.body;
  console.log(file);
  data.append('files', file);
  data.append('name', name);
  data.append('metadata', '{"keyvalues": { "example": "value" }}');
  data.append('wrapWithDirectory', 'false');
  data.append('pinToIPFS', 'false');

  const config = {
    method: 'post',
    url: 'https://managed.mypinata.cloud/api/v1/content',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY,
      ...data.getHeaders()
    },
    data: data
  };

  console.log(req);
  axios(config).then((res) => {
    console.log(res.data);
  });
}

// handler();

// const getHandler = () => {
//   var config = {
//     method: 'get',
//     url: 'https://managed.mypinata.cloud/api/v1/content?createdAtStart=2022-01-01T06:00:00.000Z&pinSizeMin=100',
//     headers: {
//       'x-api-key': 'AIFUlXOCMKZVE6QtmJhQI5V4ZEQ8yxso'
//     }
//   };
//   axios(config).then((res) => {
//     console.log(res.data);
//   });
// };

// getHandler();
