import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
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
  }, []);

  return (
    <div>
      <h3 className="text-blue-800">Dashboard</h3>
      <ImageUploader />
    </div>
  );
}
