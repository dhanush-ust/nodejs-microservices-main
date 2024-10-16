const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use('/sales', createProxyMiddleware({ target: 'http://localhost:3001/sales', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3002/products', changeOrigin: true }));
app.use('/customers', createProxyMiddleware({ target: 'http://localhost:3003/customers', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});