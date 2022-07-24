import Head from 'next/head';
import { Grid, Container, Divider, Typography, Stack, colors } from '@mui/material';
import { useTheme, Button } from '@mui/material';
import { height } from '@mui/system';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';
import { getUsers } from '../services/sanity.service';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Link from 'next/link';

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
              height: '100vh'
            }}
          >
            <h2 className="font-bold text-6xl sm:text-9xl mx-auto text-center mt-24 mb-4">
              PB and J
            </h2>
            <p className="font-semibold text-2xl sm:text-4xl mx-auto text-center my-3">
              Store images with blockchain technology.
            </p>
            <p className="font-semibold text-2xl sm:text-4xl mx-auto text-center my-3">
              Mint your own personal NFTs.
            </p>

            <br />
            <br />
            <div class="flex flex-col items-center justify-items-center">
              <KeyboardDoubleArrowDownIcon
                className="mx-auto text-center"
                color="primary"
                sx={{ fontSize: 200 }}
              />
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div
              style={{
                backgroundColor: theme.palette.primary.main,
                width: '100%',
                height: '350px'
              }}
              className="slant-boi flex flex-col items-center justify-items-center"
            >
              <h3 className="mx-auto text-center mt-36 font-light text-2xl sm:text-4xl">
                Start creating NFTs{' '}
                <a href="/dashboard" className="font-bold uppercase cursor-pointer underline">
                  here!
                </a>
              </h3>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
