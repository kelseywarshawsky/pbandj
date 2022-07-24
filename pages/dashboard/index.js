import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { getPinata, deletePinata, unSubmarine } from './../../pinata/pinata.js';

export default function Dashboard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (images.length === 0) {
        await getPinata()
          .then((res) => {
            console.log(res.nfts);
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

  const getCid = (url) => {
    const ending = url.split('/ipfs/')[1];
    const cid = ending.split('?')[0];
    console.log(cid);
    return cid;
  };

  const getImageArray = async (NFTs, accessToken) => {
    const urls = NFTs.map((NFT) => {
      let url = buildImageUrl(NFT.cid, accessToken);
      let id = NFT.id;
      return { url, id };
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

  const deleteImage = async (id, url) => {
    console.log('dis deletin');
    const cid = getCid(url);
    await deletePinata(id, cid).then((res) => {
      console.log(res);
      if (res.status === 200) {
        window.alert('Image Deleted');
      } else if (res === 'CURRENT_USER_HAS_NOT_PINNED_CID') {
        window.alert('you have not pinned this cid');
      }
    });
    await getNewImage();
  };

  const pinIt = async (id) => {
    await unSubmarine(id).then((res) => {
      window.alert(res);
    });
  };

  return (
    <div>
      <br />
      <ImageUploader getNewImage={getNewImage} />
      {images.length > 0 ? (
        <ImageGrid images={images} deleteImage={deleteImage} pinIt={pinIt} />
      ) : (
        <p>Upload Some Images Above To See Some NFTs</p>
      )}
    </div>
  );
}
