import React from 'react';
import { gateways } from '../../../../gateways/gateways';

const Shop = ({ name, setSelectedShop, shopId }) => {
  return (
    <li className="shop-list__item" onClick={() => setSelectedShop(shopId)}>
      {name}
    </li>
  );
};

export default Shop;
