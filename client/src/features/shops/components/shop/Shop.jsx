import React from 'react';

const Shop = ({ name, setSelectedShop, shopId }) => {
  return (
    <li className="shop-list__item" onClick={() => setSelectedShop(shopId)}>
      {name}
    </li>
  );
};

export default Shop;
