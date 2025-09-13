// src/api.js
import axios from 'axios';

// Lấy thông tin từ biến môi trường một cách an toàn
const PROJECT_ID = process.env.REACT_APP_SUPABASE_PROJECT_ID;
const API_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

// ✅ Cải tiến: Đặt baseURL là phần chung của tất cả các API endpoint
// Điều này giúp dễ dàng gọi các endpoint khác trong tương lai (ví dụ: /users, /orders)
const API_BASE_URL = `https://${PROJECT_ID}.supabase.co/functions/v1/trau-vang-backend/api`;

// Tạo một instance của axios với cấu hình mặc định
const apiClient = axios.create({
  baseURL: API_BASE_URL, // Sử dụng URL gốc đã được định nghĩa ở trên
  headers: {
    'apikey': API_KEY,
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export default apiClient;