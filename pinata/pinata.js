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
      console.log('RES:::::', res);
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

export async function postPinata(image, name, description, address) {
  const data = new FormData();
  data.append('files', image);
  data.append('name', name);
  data.append('wrapWithDirectory', 'false');
  data.append(
    'metadata',
    '{"keyvalues": { "description": "' + description + '", "userAddress": "' + address + '" }}'
  );
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

  await axios(config).then((res) => {
    return res.data;
  });
}

export async function unSubmarine(id) {
  console.log(id);
  var data = JSON.stringify({
    name: 'pinned',
    pinToIPFS: true
  });

  var config = {
    method: 'put',
    url: `https://managed.mypinata.cloud/api/v1/content/${id}`,
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY,
      'Content-Type': 'application/json'
    },
    data: data
  };

  const res = await axios(config);
  console.log(res.data);
  return res.data;
}

export async function updateName(name, id) {
  var data = JSON.stringify({
    name: name,
    pinToIPFS: false
  });

  var config = {
    method: 'put',
    url: `https://managed.mypinata.cloud/api/v1/content/95c904a0-4d61-4598-a4c8-fb5f0793c7ab/${id}`,
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY,
      'Content-Type': 'application/json'
    },
    data: data
  };

  await axios(config).then((res) => {
    return res.data;
  });
}

export async function deletePinata(id, cid) {
  await unSubmarine(id);
  var config = {
    method: 'delete',
    url: `https://managed.mypinata.cloud/api/v1/content/${id}`,
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_SUBMARINE_KEY
    }
  };

  const res = await axios(config);
  return res.data;
}
