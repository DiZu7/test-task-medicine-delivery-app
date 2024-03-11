const CART_KEY = 'cart';

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];

const addProductToCart = product => {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existingProduct = cart.find(({ id }) => id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const removeProductFromCart = productId => {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  const updatedCart = cart.filter(({ id }) => id !== Number(productId));
  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};

const updateProductQuantity = (productId, updatedQuantity) => {
  const cart = getCart();
  const updatedCart = cart.map(product => {
    if (product.id === productId) {
      return { ...product, quantity: updatedQuantity };
    }
    return product;
  });

  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};

const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

export const cartStorage = {
  addProductToCart,
  removeProductFromCart,
  updateProductQuantity,
  getCart,
  clearCart,
};
