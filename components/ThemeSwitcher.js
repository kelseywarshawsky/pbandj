import React from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import Switch from '@mui/material/Switch';

// Needs to be passed themeColor and setThemeColor all the way from the top _app.js for state setting
const ThemeSwitcher = ({ themeColor, setThemeColor }) => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>white</Typography>
        <Switch
          onChange={() => {
            setThemeColor(!themeColor);
          }}
          defaultChecked
          sx={{
            '&:active': {
              '& .MuiSwitch-thumb': {
                backgroundColor: theme.palette.error.main
              },
              '& .MuiSwitch-switchBase.Mui-checked': {
                backgroundColor: theme.palette.error.main
              }
            },
            '& .MuiSwitch-track': {
              backgroundColor: 'white'
            },
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                color: '#fff',
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: theme.palette.error.dark
                }
              }
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: theme.palette.background.main,
              opacity: '100%',
              '&.Mui-checked': {
                color: theme.palette.error.dark,
                backgroundColor: theme.palette.error.dark
              }
            }
          }}
        />
        <Typography>wheat</Typography>
      </Stack>
    </>
  );
};

export default ThemeSwitcher;
