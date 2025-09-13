// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // 1. Import Link từ React Router

function Header() {
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={RouterLink} // Thêm link vào logo để về trang chủ
          to="/"
          sx={{ 
            flexGrow: 1, 
            color: '#0065F2', 
            fontWeight: 'bold',
            textDecoration: 'none' // Bỏ gạch chân của link
          }}
        >
          Trâu Vàng
        </Typography>
        <Box>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Sản phẩm</Button>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Giải pháp</Button>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Khách hàng</Button>
          <Button color="inherit" sx={{ color: 'text.primary' }}>Hỗ trợ</Button>
        </Box>
        <Box sx={{ marginLeft: 2 }}>
           {/* 2. Thêm nút Quản trị, dùng component={RouterLink} và to="/admin" */}
          <Button 
            variant="outlined" 
            component={RouterLink} 
            to="/admin" 
            sx={{ marginRight: 1 }}
          >
            Quản trị
          </Button>
          <Button variant="contained">Đăng ký</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;