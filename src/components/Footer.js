// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ backgroundColor: '#212B36', color: 'white', py: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Trâu Vàng
            </Typography>
            <Typography variant="body2" color="#919EAB">
              Công ty Cổ phần Công nghệ Trâu Vàng<br />
              Hotline: 024 6660 2670<br />
              Trụ sở chính: Tầng 6-7, số 1B Yết Kiêu, phường Cửa Nam, thành phố Hà Nội, Việt Nam
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Doanh nghiệp</Typography>
            <Link href="#" color="inherit" display="block" underline="hover">Về Trâu Vàng</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Khách hàng</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Tuyển dụng</Link>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Hỗ trợ</Typography>
            <Link href="#" color="inherit" display="block" underline="hover">Câu hỏi thường gặp</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Hướng dẫn sử dụng</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Blog</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Tư vấn bán hàng</Typography>
            <Typography variant="h5" color="primary.main" sx={{ fontWeight: 'bold' }}>1800 6162</Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 1 }}>Chăm sóc khách hàng</Typography>
            <Typography variant="h5" color="primary.main" sx={{ fontWeight: 'bold' }}>1900 6522</Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="#919EAB">
            © 2025 Trâu Vàng. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;