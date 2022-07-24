import { useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useWeb3 } from '@3rdweb/hooks';
import Header from '../components/Header';
import Head from 'next/head';
import { Grid, Container, Divider, Typography } from '@mui/material';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`
};

export default function Home() {
  const { address, connectWallet } = useWeb3();
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
    })();
  }, [address]);

  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header />
          <div>
            <Head>
              <title>PBandJ</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Container>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Typography variant="h1">p b and j</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">.</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">.</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">we'll bring the bread</Typography>
                </Grid>
              </Grid>
              <Divider variant="middle" />
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item xs={12}></Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button className={style.button} onClick={() => connectWallet('injected')}>
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome to be <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
