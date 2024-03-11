import { In } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Product } from '../entity/Product';
import { Shop } from '../entity/Shop';

const repository = AppDataSource.getRepository(Product);

const getByShop = async (shop: Shop): Promise<Product[]> => {
  return await repository.find({ where: { shop: { id: shop.id }}});
};

const getById = async (id: number): Promise<Product> => {
  const product = await repository.findOneBy({ id: id });

  if (!product) {
    throw new Error('Entity not exist');
  }

  return product;
};

const findByIds = async (ids: number[]): Promise<Product[]> => {
  return await repository.findBy({ id: In(ids) });
}

const save = async (product: Product): Promise<void> => {
  await repository.save(product);
}

export const productRepository = {
  getByShop,
  getById,
  findByIds,
  save,
};