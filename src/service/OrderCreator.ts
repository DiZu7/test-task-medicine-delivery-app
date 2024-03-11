import { Order } from "../entity/Order";
import { OrderItem } from "../entity/OrderItem";
import { Product } from "../entity/Product";
import { orderRepository } from "../repository/OrderRepository";
import { productRepository } from "../repository/ProductRepository";

type ProductItemData = {
	productId: number;
	quantity: number;
};

type OrderDataInput = {
  userEmail: string;
  userName: string;
  userPhone: string;
  userAddress: string;
  productItemsData: ProductItemData[];
};

export const createOrder = async (data: OrderDataInput): Promise<void> => {
	const order = new Order(data.userName, data.userEmail, data.userAddress, data.userPhone);

	const productIds = data.productItemsData.map(({ productId }) => productId);
	const products: Product[] = await productRepository.findByIds(productIds);

	if (productIds.length !== products.length) {
		throw new Error('Invalid product data');
	}
	
	let totalPrice = 0;

	order.items = data.productItemsData.map(({ productId, quantity }) => {
		const product = products.find((product) => productId === product.id);

		const orderItem = new OrderItem(product, order, quantity);

		totalPrice += product.price * quantity;

		return orderItem;
  });

  order.totalPrice = parseFloat(totalPrice.toFixed(2));

  await orderRepository.save(order);
}
