// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#0065F2', fontWeight: 'bold' }}>
          Trâu Vàng
        </Typography>
        <Box>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Sản phẩm</Button>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Giải pháp</Button>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Khách hàng</Button>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Hỗ trợ</Button>
        </Box>
        <Box sx={{ marginLeft: 2 }}>
          <Button variant="outlined" sx={{ marginRight: 1 }}>Đăng nhập</Button>
          <Button variant="contained">Đăng ký</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;