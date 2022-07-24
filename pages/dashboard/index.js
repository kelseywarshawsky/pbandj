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

  const getNewImage = async () => {
    console.log('are you talking to me?');
    await getPinata()
      .then((res) => {
        getImageArray(res.nfts, res.accessToken);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <br />
      <ImageUploader getNewImage={getNewImage} />
      {images.length > 0 ? (
        <ImageGrid images={images} />
      ) : (
        <p className="mx-auto text-center">Upload Some Images Above To See Some NFTs</p>
      )}
    </div>
  );
}
