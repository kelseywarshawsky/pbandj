import React, { useEffect, userState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { client } from '../../lib/sanityClient';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useWeb3 } from '@3rdweb/hooks';

const Collection = () => {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionid } = router.query;
  const [collection, setCollection] = useState({});
  const [nfts, setNfts] = useState({});
  const [listings, setListings] = useState({});

  const nftModule = useMemo(() => {
    if (!provider) return;
    const sdk = new ThirdwebSDK(
      'https://eth-rinkeby.alchemyapi.io/v2/Nf92zrkri1if8epFPebxfavh0_Xdv3z0'
    );
    return sdk.getNFTModule(collectionid);
  }, [provider]);

  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();
      setNfts(nfts);
    })();
  }, [nftModule]);

  const marketPlaceModule = useMemo(() => {
    if (!provider) return;
    const sdk = new ThirdwebSDK(provider.getSigner(), '0xe120b41f05aCc4350e1c069dF6C0BD8550887cD8');
  }, [provider]);

  // };

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAlllistings());
    })();
  }, [marketPlaceModule]);

  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${collectionid}"]{
    "imageUrl":profileImage.asset=>url,
    "bannerImageUrl":bannerImage.asset->url,
    volumeTraded, createdBy, contractAddress,
    "creator":createdBy, contractAddress,
    "creator":createdBy->userName,
    title, floorPrice,
    "allOwners":owners[]->, description
  }`;

    const collectionData = await sanityClient.fetch(query);
    console.log('collection data ', collectionData);
    await setCollection(collectionData[0]);
  };

  useEffect(() => {
    fetchCollectionData();
  }, [collectionid]);

  console.log('router query', router.query);
  console.log('collection id ', router.query.collectionid);
  return <div>collection id need </div>;
};
