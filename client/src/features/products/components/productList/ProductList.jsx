import React, { useState, useEffect } from 'react';
import Product from '../product/Product.jsx';
import './productList.scss';
import { gateways } from '../../../../gateways/gateways.js';

const ProductList = ({ selectedShopId }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await gateways.getProductList(selectedShopId);

        setProductList(data || []);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedShopId]);

  return (
    <div className="product-cards">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="product-cards__list">
          {productList.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
