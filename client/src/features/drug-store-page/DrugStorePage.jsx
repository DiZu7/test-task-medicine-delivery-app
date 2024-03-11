import React, { useState, useEffect } from 'react';
import ProductList from '../products/components/productList/ProductList.jsx';
import ShopList from '../shops/components/shopList/ShopList.jsx';
import './drugStorePage.scss';
import { gateways } from '../../gateways/gateways.js';

const DrugStorePage = () => {
  const [shopList, setShopList] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchShopList = async () => {
    try {
      const { data } = await gateways.getShopList();

      setShopList(data || []);
      setSelectedShopId(data[0]?.id);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShopList();
  }, []);

  return (
    <main className="main drug-store-page container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ShopList shopList={shopList} setSelectedShop={setSelectedShopId} />
          {selectedShopId && <ProductList selectedShopId={selectedShopId} />}
        </>
      )}
    </main>
  );
};

export default DrugStorePage;
