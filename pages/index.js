import Head from 'next/head';
import { Grid, Container, Divider, Typography } from '@mui/material';
import { useTheme, Button } from '@mui/material';

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <>
        <div>
          <Head>
            <title>PBandJ</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Container>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h1" color={theme.palette.text.primary}>
                  p b and j
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  .
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  .
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  we'll bring the bread
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  .
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  .
                </Typography>
              </Grid>
            </Grid>
            <Divider variant="middle" />
          </Container>
          <Container>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  .
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  .
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  Are you lazy?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" color={theme.palette.text.primary}>
                  Is the most you can manage to make for lunch a PB and J? Great.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    </div>
  );
}
