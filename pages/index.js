import Head from 'next/head';
import { Grid, Container, Divider, Typography, Stack, colors } from '@mui/material';
import { useTheme, Button } from '@mui/material';
import { height } from '@mui/system';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import { client } from '../lib/sanityClient';
import Link from 'next/link';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`
};

export default function Home({ themeColor, setThemeColor }) {
  const { address, connectWallet, chainId, provider } = useWeb3();
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

          <div>
            <div
              style={{
                backgroundColor: theme.palette.background.main,
                height: '35vh'
              }}
            >
              <Grid
                container
                flexDirection={'column'}
                justifyContent={'center'}
                alignContent={'center'}
                alignItems={'center'}
              >
                <Grid item>
                  <Typography variant="h1">welcome!</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">what is p b & j?</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={5}
                mt={5}
              >
                <Grid item xs={'auto'}>
                  <Typography variant="h3">pinatas,</Typography>
                </Grid>
                <Grid item xs={'auto'}>
                  <Typography variant="h3">blockchain,</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent={'center'} mt={2}>
                <Grid item>
                  <Typography variant="h5">&</Typography>
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                backgroundColor: theme.palette.secondary.main,
                height: '35vh'
              }}
            >
              <Grid container height={'100%'} justifyContent={'center'} flexDirection={'column'}>
                <Grid item xs={'auto'} container justifyContent={'center'}>
                  <Grid item>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 500,
                        color: theme.palette.primary.main
                      }}
                    >
                      JELLY!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                backgroundColor: theme.palette.error.dark,
                height: '35vh'
              }}
            >
              <Grid container height={'100%'} justifyContent={'center'} flexDirection={'column'}>
                <Grid item xs={'auto'} container justifyContent={'center'}>
                  <Grid item>
                    <Link href={'/about'} passHref>
                      <Button variant="contained" component="label" size="large" sx={{}}>
                        learn more
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                backgroundColor: theme.palette.background.main,
                height: '35vh'
              }}
            ></div>
          </div>
        </div>
      </>
    </div>
  );
}
