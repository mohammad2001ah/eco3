import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Black Store
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to='/'>
            <Button color="inherit">Home</Button>
          </Link>
          <Button color="inherit">Link</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact Us</Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            sx={{ color: 'inherit', ml: 2 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton sx={{ color: 'inherit' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
