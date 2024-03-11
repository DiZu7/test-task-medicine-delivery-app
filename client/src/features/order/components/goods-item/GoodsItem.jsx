import React, { useEffect, useState } from 'react';
import iconsSprite from '../../../../images/icons.svg';
import { cartStorage } from '../../../products/storage/cartStorage';
import { BACKEND_DOMEN } from '../../../../constants/server';

const GoodsItem = ({ name, imgPath, price, id, quantity, onChange }) => {
  const [quantityValue, setQuantityValue] = useState(quantity);

  const onChangeQuantityInputValue = e => {
    const updatedQuantity = parseInt(e.target.value);
    setQuantityValue(updatedQuantity);
    cartStorage.updateProductQuantity(id, updatedQuantity);
    onChange();
  };

  return (
    <li className="goods-card">
      <img className="goods-card__img" src={`${BACKEND_DOMEN}/${imgPath}`} alt={name} />
      <div className="goods-card__content">
        <h4 className="goods-card__title">{name}</h4>
        <p className="goods-card__price">Price: {price}</p>
        <div className="goods-card__quantity">
          <input
            className="goods-card__input"
            type="number"
            name="quantity"
            min="1"
            value={quantityValue}
            onChange={onChangeQuantityInputValue}
          />
          <button
            className="goods-card__btn-delete"
            type="button"
            onClick={() => {
              cartStorage.removeProductFromCart(id);
              onChange();
            }}
          >
            <svg className="goods-card__btn-delete-icon" width="20" height="20">
              <use href={`${iconsSprite}#icon-delete`} />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default GoodsItem;
