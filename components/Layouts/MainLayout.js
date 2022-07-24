import React, { useEffect } from 'react';
import { Button, Container, Grid, useTheme, Typography } from '@mui/material';
import { useWeb3 } from '@3rdweb/hooks';
import { client } from '../../lib/sanityClient';

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
                <Typography variant="h2">signed up for meta mask?</Typography>
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
                <Typography variant="h3">(yes, it's really that simple)</Typography>
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
