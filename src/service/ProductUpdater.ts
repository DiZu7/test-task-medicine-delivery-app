import { Product } from "../entity/Product";
import { productRepository } from "../repository/ProductRepository";

const switchIsFavorite = async (product: Product): Promise<void> => {
	product.isFavorite = !product.isFavorite;

	await productRepository.save(product);
}

export const productUpdater = {
	switchIsFavorite,
}