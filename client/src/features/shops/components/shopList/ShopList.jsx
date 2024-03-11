import React from 'react';
import './shopList.scss';
import Shop from '../shop/Shop.jsx';

const ShopList = ({ shopList, setSelectedShop }) => {
  return (
    shopList !== null && (
      <aside className="side-bar">
        <h5 className="side-bar__title">Shops</h5>
        <ul className="side-bar__list shop-list">
          {shopList.map(({ id, name }) => (
            <Shop key={id} name={name} setSelectedShop={setSelectedShop} shopId={id} />
          ))}
        </ul>
      </aside>
    )
  );
};

export default ShopList;
