import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Product', path: '/Product' },
    { label: 'Contact Us', path: '/ContactUs' }
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#000', marginBottom: 5 }}>
        <Toolbar>
          
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>

          
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
              Black Store
            </Link>
          </Typography>

      
          <Box sx={{ display: { xs: 'none', sm: 'block' },
          justifyContent:"center",
          alignItems:"center",
          position:"absolute",
          left:"50%",
          transform:"translateX(-50%)"
          }}>
            {navItems.map((item) => (
              <Link key={item.label} to={item.path} style={{ textDecoration: 'none' }}>
                <Button color="inherit" sx={{ color: 'white' }}>{item.label}</Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <IconButton sx={{ color: 'inherit' }} aria-label="shipping">
              <LocalShippingIcon />
            </IconButton>
            <Typography variant="body2" color="white" sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
              Free shipping on orders over 50$
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="left" open={mobileOpen} onClose={handleMenuClick}>
        <Box sx={{ width: 250 }} onClick={handleMenuClick}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
