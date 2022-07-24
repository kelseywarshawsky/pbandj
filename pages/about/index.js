import { Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid item xs={'auto'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography mr={3} variant="h3">
              welcome to{' '}
            </Typography>
            <Typography fontWeight={'400'} variant="h1">
              p b & j
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
