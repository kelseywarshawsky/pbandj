import Head from 'next/head';
import { Grid, Container, Divider, Typography } from '@mui/material';
import { useTheme, Button } from '@mui/material';
import { height } from '@mui/system';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';
import { getUsers } from '../services/sanity.service';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`
};

export default function Home({ themeColor, setThemeColor }) {
  const { address, connectWallet, chainId, provider } = useWeb3();
  const [currentUser, setCurrentUser] = useState({});
  const theme = useTheme();

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address
      };
      const result = await client.createIfNotExists(userDoc);

      const allUsers = await getUsers();
      
      allUsers.forEach((user) => {
        if (user.walletAddress === address) {
          setCurrentUser(user);
        }
      });
      //comes from useWeb3()
      console.log(' chain id ', chainId);
      console.log('address == ', address);
      console.log('provider == ', provider);
      // console.log('results == ', result);
      // console.log('connect wallet == ', connectWallet);
      // console.log('disconnect wallet == ', disconnectWallet);
      // console.log(' get network meta data == ', getNetworkMetadata);
    })();
  }, [address]);

  return (
    <div>
      <>
        <div>
          <Head>
            <title>p b & j</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>

          <div
            style={{
              backgroundColor: theme.palette.background.main,
              height: '35vh'
            }}
          >
            {JSON.stringify(currentUser)}
            Bread 1
          </div>
          <div
            style={{
              backgroundColor: theme.palette.secondary.main,
              height: '35vh'
            }}
          >
            JELLY{' '}
          </div>
          <div
            style={{
              backgroundColor: theme.palette.error.dark,
              height: '35vh'
            }}
          >
            PB{' '}
          </div>
          <div
            style={{
              backgroundColor: theme.palette.background.main,
              height: '35vh'
            }}
          >
            Bread 2
          </div>
        </div>
      </>
    </div>
  );
}
