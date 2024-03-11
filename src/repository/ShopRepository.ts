import { Shop } from '../entity/Shop';
import { AppDataSource } from '../data-source';

const repository = AppDataSource.getRepository(Shop);

const getAll = async (): Promise<Shop[]> => {
	return await repository.find();
}

const getById = async (shopId: number): Promise<Shop> => {
	const shop = await repository.findOneBy({ id: shopId });

	if (!shop) {
		throw new Error('Entity not exist');
	}

	return shop;
}

export const shopRepository = {
	getAll,
	getById,
}