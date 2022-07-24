import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/system';

const pages = ['about', 'dashboard', 'collections'];
const settings = ['Logout'];

const Navigation = ({ themeColor, setThemeColor }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      enableColorOnDark
      sx={
        {
          // paddingTop: '10vh'
        }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 900,
              letterSpacing: '.2rem',
              fontSize: '2rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            p b & j
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map((page) => {
              if (page === 'collections') {
                return (
                  <Link href={`/${page}/0x74804f316B8CCCB7cfff8927EFb127DDCDB3E660`} passHref>
                    <Button
                      key={page}
                      sx={{ my: 2, display: 'block', color: theme.palette.primary.contrastText }}
                    >
                      {page}
                    </Button>
                  </Link>
                );
              } else {
                return (
                  <Link href={`/${page}`} passHref>
                    <Button
                      key={page}
                      sx={{ my: 2, display: 'block', color: theme.palette.primary.contrastText }}
                    >
                      {page}
                    </Button>
                  </Link>
                );
              }
            })}
          </Box>
          <Link href="/collections/0x74804f316B8CCCB7cfff8927EFb127DDCDB3E660">
            <div>Collections</div>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={5}>
              <Grid item>
                <ThemeSwitcher themeColor={themeColor} setThemeColor={setThemeColor} />
              </Grid>
              <Grid item>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{
                      textTransform: 'lowercase'
                    }}
                  >
                    <Typography
                      sx={{
                        textTransform: 'none'
                      }}
                      textAlign="center"
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
