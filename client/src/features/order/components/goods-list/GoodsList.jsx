import React from 'react';
import GoodsItem from '../goods-item/GoodsItem.jsx';

const GoodsList = ({ cart, onChange }) => {
  return (
    cart !== null && (
      <div className="order-form__goods">
        {
          <ul className="order-form__goods-list">
            {cart.map(item => (
              <GoodsItem key={item.id} {...item} onChange={onChange} />
            ))}
          </ul>
        }
      </div>
    )
  );
};

export default GoodsList;
