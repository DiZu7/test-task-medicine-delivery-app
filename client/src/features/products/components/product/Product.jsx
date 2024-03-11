import React, { useState } from 'react';
import './product.scss';
import iconsSprite from '../../../../images/icons.svg';
import { cartStorage } from '../../storage/cartStorage';
import { BACKEND_DOMEN } from '../../../../constants/server';
import { gateways } from '../../../../gateways/gateways';

const Product = ({ id, name, imgPath, price, isFavorite }) => {
  const [isFavoriteProduct, setIsFavoriteProduct] = useState(isFavorite);

  const hadleIsFavoriteClick = async () => {
    try {
      await gateways.swithIsFavotire(id);

      setIsFavoriteProduct(!isFavoriteProduct);
    } catch (e) {}
  };

  return (
    <li className="product-card">
      <img className="product-card__img" src={`${BACKEND_DOMEN}/${imgPath}`} alt="Paracetamol" />
      <h4 className="product-card__title">{name}</h4>
      <div className="product-card__btns-wrap">
        <button className="product-card__btn-fav" type="button" onClick={hadleIsFavoriteClick}>
          <svg
            className={`product-card__btn-fav-icon${isFavoriteProduct ? '_active' : ''}`}
            width="20"
            height="20"
          >
            <use href={`${iconsSprite}#icon-favorite`} />
          </svg>
        </button>
        <button
          className="product-card__btn"
          type="button"
          onClick={() => cartStorage.addProductToCart({ id, name, price, imgPath })}
        >
          add to card
        </button>
      </div>
    </li>
  );
};

export default Product;
