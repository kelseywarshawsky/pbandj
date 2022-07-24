import Head from 'next/head';
import { Grid, Container, Divider, Typography } from '@mui/material';
import { useTheme, Button } from '@mui/material';
import { height } from '@mui/system';

export default function Home() {
  const theme = useTheme();
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
