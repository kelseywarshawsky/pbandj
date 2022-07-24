import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { getPinata } from './../../pinata/pinata.js';

export default function Dashboard() {
  const [NFTs, setNFTs] = useState([]);
  const [imageArray, setImageArray] = useState([]);

  const buildImageUrl = (cid, token) => {
    const url = `${process.env.NEXT_PUBLIC_DEFAULT_GATEWAY}/ipfs/${cid}&accessToken=${token}`;
    return url;
  };

  useEffect(() => {
    async function fetchData() {
      await getPinata()
        .then((res) => {
          setNFTs(res);
          NFTs.forEach((NFT) => {
            let oneUrl = buildImageUrl(NFT.cid, 'token');
            setImageArray([...imageArray, oneUrl]);
          });
        })
        .catch((err) => console.error(err));
    }
    fetchData();

    console.log('nfts', NFTs);
  }, []);

  return (
    <div>
      <br />
      <ImageUploader />
      <ImageGrid
        // images={[]}
        images={imageArray}
      />
    </div>
  );
}
