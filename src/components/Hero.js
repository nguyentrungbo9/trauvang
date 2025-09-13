// src/components/Hero.js
import React from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';

function Hero() {
  return (
    <Box sx={{ backgroundColor: '#f4f6f8', py: 10 }}> {/* py: padding top and bottom */}
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Phần mềm quản lý bán hàng phổ biến nhất
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Dễ dàng sử dụng, tiết kiệm chi phí, phù hợp cho mọi ngành hàng.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" size="large" sx={{ mr: 2 }}>
                Dùng thử miễn phí
              </Button>
              <Button variant="outlined" size="large">
                Khám phá
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
             {/* Bạn có thể thêm một hình ảnh minh họa ở đây sau */}
             <Box 
                component="img"
                sx={{ width: '100%', borderRadius: 2 }}
                alt="POS illustration"
                src="https://via.placeholder.com/400x300.png?text=Hinh+Anh+Minh+Hoa" // Placeholder image
             />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;