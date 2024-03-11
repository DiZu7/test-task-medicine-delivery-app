import { apiInstance } from '../common/api';

const getProductList = shopId => apiInstance.get(`/products/${shopId}`);

const getShopList = () => apiInstance.get('/shops');

const swithIsFavotire = productId => apiInstance.post(`/product-switch-is-favorite/${productId}`);

const placeOrder = data => apiInstance.post('/create-order', data);

export const gateways = {
  getProductList,
  getShopList,
  swithIsFavotire,
  placeOrder,
};
