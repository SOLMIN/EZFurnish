import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px', // Optional: Limit the header width
            margin: '0 auto', // Center the header horizontally
            padding: '0 20px', // Add padding to the left and right
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logoEzfurnish.png"
              alt="EZFurnish Logo"
              style={{ height: '40px', marginRight: '10px' }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              EZFurnish
            </Typography>
          </Box>

          {/* City Dropdown */}
          <Box>
            <Button
              onClick={handleMenuOpen}
              sx={{ textTransform: 'none', color: '#000' }}
            >
              Pune
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Bangalore</MenuItem>
              <MenuItem onClick={handleMenuClose}>Mumbai</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delhi</MenuItem>
              <MenuItem onClick={handleMenuClose}>Chennai</MenuItem>
            </Menu>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'relative',
              width: '300px',
              backgroundColor: '#f1f1f1',
              borderRadius: '20px',
              padding: '5px 10px',
            }}
          >
            <InputBase
              placeholder="Search for products"
              sx={{
                flex: 1,
                color: '#000',
                fontSize: '14px',
                padding: '5px',
              }}
            />
            <IconButton sx={{ padding: '5px' }}>
              <SearchIcon sx={{ color: '#000', fontSize: '20px' }} />
            </IconButton>
          </Box>

          {/* Cart and Login */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <Button variant="outlined" sx={{ textTransform: 'none' }}>
              Login / Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;