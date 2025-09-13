// src/App.js
import React, { useState, useEffect } from 'react';
import apiClient from './api';
import './App.css';

// --- BẮT ĐẦU IMPORT TỪ MUI ---
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// --- KẾT THÚC IMPORT TỪ MUI ---

function App() {
  // Toàn bộ logic state và các hàm xử lý vẫn được giữ nguyên
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', qr_code: '', price: '', stock_quantity: '' });
  const [editingProduct, setEditingProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiClient.get('/products');
      setProducts(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (err) {
      console.error("Có lỗi khi lấy dữ liệu sản phẩm!", err);
      setError('Không thể tải danh sách sản phẩm. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiClient.post('/products', formData);
      alert('Thêm sản phẩm thành công!');
      fetchProducts();
      setFormData({ name: '', qr_code: '', price: '', stock_quantity: '' });
    } catch (err) {
      console.error("Lỗi khi thêm sản phẩm!", err);
      alert('Thêm sản phẩm thất bại!');
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        await apiClient.delete(`/products/${productId}`);
        alert('Xóa sản phẩm thành công!');
        fetchProducts();
      } catch (err) {
        console.error("Lỗi khi xóa sản phẩm!", err);
        alert('Xóa sản phẩm thất bại!');
      }
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiClient.put(`/products/${editingProduct.id}`, editingProduct);
      alert('Cập nhật thành công!');
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      console.error('Lỗi khi cập nhật sản phẩm!', err);
      alert('Cập nhật thất bại!');
    }
  };

  return (
    <>
      {/* --- BẮT ĐẦU LAYOUT MỚI CỦA MUI --- */}
      <CssBaseline /> {/* Reset CSS, đảm bảo hiển thị nhất quán */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Trang Quản Trị Trâu Vàng
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}> {/* my: 4 tạo khoảng cách trên và dưới */}
          
          {/* --- TOÀN BỘ GIAO DIỆN CŨ CỦA BẠN SẼ NẰM Ở ĐÂY --- */}
          {/* Chúng ta sẽ nâng cấp phần này ở bước tiếp theo */}

          <form onSubmit={handleSubmit} className="product-form">
            <h2>Thêm sản phẩm mới</h2>
            <input type="text" name="name" placeholder="Tên sản phẩm" value={formData.name} onChange={handleInputChange} required />
            <input type="text" name="qr_code" placeholder="Mã QR" value={formData.qr_code} onChange={handleInputChange} required />
            <input type="number" name="price" placeholder="Giá bán" value={formData.price} onChange={handleInputChange} required />
            <input type="number" name="stock_quantity" placeholder="Số lượng tồn kho" value={formData.stock_quantity} onChange={handleInputChange} required />
            <button type="submit">Thêm sản phẩm</button>
          </form>

          <div className="product-list">
            <h2>Danh sách sản phẩm</h2>
            {isLoading && <p>Đang tải dữ liệu...</p>}
            {error && <p className="error-message">{error}</p>}
            {!isLoading && !error && (
              <ul>
                {products.length > 0 ? (
                  products.map(product => (
                    <li key={product.id}>
                      <span>{product.name} - Giá: {Number(product.price).toLocaleString()} VND - Tồn kho: {product.stock_quantity}</span>
                      <div className="buttons">
                        <button onClick={() => handleEditClick(product)} className="edit-btn">Sửa</button>
                        <button onClick={() => handleDelete(product.id)} className="delete-btn">Xóa</button>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Chưa có sản phẩm nào trong cửa hàng.</p>
                )}
              </ul>
            )}
          </div>

          {editingProduct && (
            <div className="modal-overlay">
              <div className="modal-content">
                <form onSubmit={handleUpdateSubmit}>
                  <h2>Sửa sản phẩm</h2>
                  <input type="text" name="name" value={editingProduct.name} onChange={handleEditFormChange} required />
                  <input type="text" name="qr_code" value={editingProduct.qr_code} onChange={handleEditFormChange} required />
                  <input type="number" name="price" value={editingProduct.price} onChange={handleEditFormChange} required />
                  <input type="number" name="stock_quantity" value={editingProduct.stock_quantity} onChange={handleEditFormChange} required />
                  <div className="modal-buttons">
                    <button type="submit">Lưu thay đổi</button>
                    <button type="button" onClick={handleCancelEdit}>Hủy</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* --- KẾT THÚC GIAO DIỆN CŨ --- */}

        </Box>
      </Container>
      {/* --- KẾT THÚC LAYOUT MỚI CỦA MUI --- */}
    </>
  );
}

export default App;