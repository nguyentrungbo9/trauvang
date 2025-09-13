// src/components/Features.js
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import SavingsIcon from '@mui/icons-material/Savings';
import StorefrontIcon from '@mui/icons-material/Storefront';

const features = [
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: 'Đơn giản & Dễ sử dụng',
    description: 'Giao diện được thiết kế trực quan, thân thiện và thông minh. Chỉ mất 15 phút để làm quen.',
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 40 }} />,
    title: 'Tiết kiệm chi phí',
    description: 'Miễn phí cài đặt, triển khai, nâng cấp và hỗ trợ. Rẻ hơn một ly trà đá mỗi ngày.',
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
    title: 'Phù hợp mọi ngành hàng',
    description: 'Phần mềm được thiết kế phù hợp cho hơn 20 ngành hàng kinh doanh khác nhau.',
  },
];

function Features() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          KiotViet giúp bạn quản lý dễ dàng, bán hàng hiệu quả
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Paper elevation={0} sx={{ p: 4, textAlign: 'center', backgroundColor: '#f4f6f8', borderRadius: 2 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;