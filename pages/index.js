import Head from 'next/head'
import Image from 'next/image'
import { Grid, Container, Divider, Typography } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PBandJ</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        
        <Grid 
          container 
          direction="column" 
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography 
              variant="h1"
            >
              p b and j
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
            >
              .
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
            >
              .
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography
              variant="h2"
            >
              we'll bring the bread
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid 
          container 
          direction="column" 
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
           
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
