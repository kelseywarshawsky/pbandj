import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { useWeb3 } from '@3rdweb/hooks';
import { getPinata, getAccessToken } from './../../pinata/pinata.js';
import { getUsers } from '../../services/sanity.service';

export default function Dashboard() {
  const [images, setImages] = useState([]);
  const router = useRouter();

  const { address } = useWeb3();

  useEffect(() => {
    if (!address) {
      router.push('/');
    }
  }, [address]);

  https: useEffect(() => {
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
      <h3 className="text-center mx-auto font-light text-3xl sm:text-4xl">Community Gallery</h3>
      {images.length > 0 ? (
        <ImageGrid images={images} />
      ) : (
        <p className="mx-auto text-center">Upload Some Images Above To See Some NFTs</p>
      )}
    </div>
  );
}
