import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { getPinata, getAccessToken } from './../../pinata/pinata.js';

export default function Dashboard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (images.length === 0) {
        await getPinata()
          .then((res) => {
            getImageArray(res.nfts, res.accessToken);
          })
          .catch((err) => console.error(err));
      }
    }
    fetchData();
  }, [images]);

  const buildImageUrl = (cid, token) => {
    const url = `${process.env.NEXT_PUBLIC_DEFAULT_GATEWAY}/ipfs/${cid}?accessToken=${token}`;
    return url;
  };

  const getImageArray = async (NFTs, accessToken) => {
    const urls = NFTs.map((NFT) => {
      let url = buildImageUrl(NFT.cid, accessToken);
      return url;
    });
    setImages(urls);
  };

  return (
    <div>
      <br />
      <ImageUploader />
      {images.length > 0 ? <ImageGrid images={images} /> : null}
    </div>
  );
}
