import React, { useEffect } from 'react';
import { Button, Container, Grid, useTheme, Typography } from '@mui/material';
import { useWeb3 } from '@3rdweb/hooks';
import { client } from '../../lib/sanityClient';
import { fontSize } from '@mui/system';

const Layout = ({ children }) => {
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
      const result = await client.createIfNotExists(userDoc);
    })();
  }, [address]);

  return (
    <>
      {!address ? (
        <>
          <Grid
            container
            alignItems={'center'}
            spacing={3}
            height={'90vh'}
            width={'100%'}
            justifyContent={'center'}
          >
            <Grid
              xs={'auto'}
              item
              container
              flexDirection={'column'}
              spacing={3}
              alignItems={'center'}
              alignContent={'center'}
            >
              <Grid item>
                <Typography variant="h2">Meta Mask?</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    padding: '2vh',
                    fontSize: '2rem'
                  }}
                  component="label"
                  onClick={() => connectWallet('injected')}
                >
                  Connect Wallet
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="h3">(Yes, it's really that simple)</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  If you don't have metamask installed, click{' '}
                  <a
                    className="font-bold uppercase underline"
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                    target="_blank"
                  >
                    here!
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
};

export default Layout;
