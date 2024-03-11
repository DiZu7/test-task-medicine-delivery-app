import React, { useEffect, useState } from 'react';
import iziToast from 'izitoast';
import GoodsList from '../order/components/goods-list/GoodsList.jsx';
import { gateways } from '../../gateways/gateways.js';
import { cartStorage } from '../products/storage/cartStorage.js';

import './shoppingCartPage.scss';

const ShoppingCartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState(cartStorage.getCart());

  useEffect(() => calculateTotalPrice(), [])

  const calculateTotalPrice = () => {
    const totalPrice = cartStorage
      .getCart()
      .reduce((total, { price, quantity }) => (total += price * quantity), 0);

    setTotalPrice(totalPrice);
  };

  const onCartUpdated = () => {
    setCart(cartStorage.getCart());
    calculateTotalPrice();
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { userName, userEmail, userPhone, userAddress } = event.target.elements;
    console.log(event.target.elements);

    const productItemsData = cartStorage.getCart().map(({ id, quantity }) => {
      return { productId: id, quantity };
    });

    try {
      await gateways.placeOrder({
        userName: userName.value,
        userEmail: userEmail.value,
        userPhone: userPhone.value,
        userAddress: userAddress.value,
        productItemsData,
      });

      event.target.reset();
      cartStorage.clearCart();

      onCartUpdated();

      iziToast.success({
        title: 'success',
        message: 'Your order successfully created',
        position: 'center',
        timeout: 2000,
        progressBar: true,
        closeOnClick: true,
      });
    } catch (e) {}
  };

  return (
    <main className="main shopping-cart-page container">
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="order-form__content">
          <div className="order-form__customer-info">
            <label className="order-form__label" htmlFor="name">
              Name:
            </label>
            <input
              className="order-form__input"
              name="userName"
              type="text"
              placeholder="Enter name"
              required
            />
            <label className="order-form__label" htmlFor="email">
              Email:
            </label>
            <input
              className="order-form__input"
              name="userEmail"
              type="email"
              placeholder="Enter email"
              required
            />
            <label className="order-form__label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="order-form__input"
              name="userPhone"
              type="phone"
              placeholder="Enter phone number"
              required
            />
            <label className="order-form__label" htmlFor="address" type="text">
              Address:
            </label>
            <input
              className="order-form__input"
              name="userAddress"
              placeholder="Enter shipping address"
              required
            />
          </div>
          <GoodsList cart={cart} onChange={onCartUpdated} />
        </div>

        <div className="order-form__footer">
          <p className="order-form__total-price">Total price: {totalPrice.toFixed(2)} </p>
          <button className="order-form__btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default ShoppingCartPage;
