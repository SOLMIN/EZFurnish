import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        py: 2,
        mt: 'auto',
      }}
    >
      <Typography variant="body2">
        &copy; 2025 EZFurnish. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;