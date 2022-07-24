import axios from 'axios';

export async function getPinata() {
  var config = {
    method: 'get',
    url: 'https://managed.mypinata.cloud/api/v1/content?limit=10',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY
    }
  };

  let nfts = [];
  let accessToken = '';
  try {
    await axios(config).then((res) => {
      nfts = res.data.items;
    });
    const ids = nfts.map((nft) => nft.id);
    await getAccessToken(ids).then((res) => {
      accessToken = res;
    });
  } catch (err) {
    console.error(err);
  }
  return { nfts, accessToken };
}

export async function getAccessToken(ids) {
  var data = JSON.stringify({
    timeoutSeconds: 3600,
    contentIds: ids
  });

  var config = {
    method: 'post',
    url: 'https://managed.mypinata.cloud/api/v1/auth/content/jwt',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY,
      'Content-Type': 'application/json'
    },
    data: data
  };

  const res = await axios(config);
  return res.data;
}

export async function postPinata(image, name, description) {
  const data = new FormData();
  data.append('files', image);
  data.append('name', name);
  data.append('wrapWithDirectory', 'false');
  data.append('metadata', '{"keyvalues": { "description": "' + description + '" }}');
  data.append('pinToIPFS', 'false');

  const config = {
    method: 'post',
    url: 'https://managed.mypinata.cloud/api/v1/content',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY,
      'Content-Type': 'multipart/form-data'
    },
    data: data
  };

  axios(config).then((res) => {
    return res.data;
  });
}
