import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Stack, Typography, useTheme } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/system';

// Needs to be passed themeColor and setThemeColor all the way from the top _app.js for state setting
const ThemeSwitcher = ({ themeColor, setThemeColor }) => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>White</Typography>
        <Switch
          onChange={() => {
            setThemeColor(!themeColor);
          }}
          defaultChecked
          sx={{
            '&:active': {
              '& .MuiSwitch-thumb': {
                backgroundColor: theme.palette.warning.main
              },
              '& .MuiSwitch-switchBase.Mui-checked': {
                backgroundColor: theme.palette.warning.main
              }
            },
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                color: '#fff',
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: theme.palette.warning.dark
                }
              }
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: theme.palette.background.main,
              opacity: '100%',
              '&.Mui-checked': {
                color: theme.palette.warning.dark,
                backgroundColor: theme.palette.warning.dark
              }
            }
          }}
        />
        <Typography>Wheat</Typography>
      </Stack>
    </>
  );
};

export default ThemeSwitcher;
