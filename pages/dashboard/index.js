import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { getPinata } from './../../pinata/pinata.js';

export default function Dashboard() {
  const [NFTs, setNFTs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getPinata()
        .then((res) => setNFTs(res))
        .catch((err) => console.error(err));
    }
    fetchData();
  }, [NFTs]);

  return (
    <div>
      <br />
      <ImageUploader />
      <ImageGrid
        // images={[]}
        images={[
          '/images/jelly.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg',
          '/images/peanut-butter.jpg'
        ]}
      />
    </div>
  );
}
