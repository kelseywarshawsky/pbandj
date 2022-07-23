import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material";

// Needs to be passed themeColor and setThemeColor all the way from the top _app.js for state setting
const ThemeSwitcher = ({ themeColor, setThemeColor }) => {
  const theme = useTheme();
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => {
        setThemeColor(!themeColor);
      }}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
