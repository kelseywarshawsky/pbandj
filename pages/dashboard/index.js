import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { getPinata, getAccessToken } from './../../pinata/pinata.js';

export default function Dashboard() {
  const [NFTs, setNFTs] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  const buildImageUrl = (cid, token) => {
    const url = `${process.env.NEXT_PUBLIC_DEFAULT_GATEWAY}/ipfs/${cid}&accessToken=${token}`;
    return url;
  };

  const getImageUrls = (NFTs) => {
    NFTs.forEach((NFT) => {
      let oneUrl = buildImageUrl(NFT.cid, 'token');
      setImageArray([...imageArray, oneUrl]);
    });
  };

  const getToken = async (id) => {
    const thing = await getAccessToken(id);
    console.log('thing', thing);
    return thing;
  };

  useEffect(() => {
    async function fetchData() {
      let ids;
      await getPinata()
        .then((res) => {
          setNFTs(res);
          ids = NFTs.map((NFT) => NFT.id);
        })
        .catch((err) => console.error(err));
      await getAccessToken(ids).then((res) => {
        setAccessToken(res);
      })
    }
    fetchData();

    console.log('nfts', NFTs);
  }, []);

  return (
    <div>
      <br />
      <ImageUploader />
      <ImageGrid images={imageArray} />
    </div>
  );
}
