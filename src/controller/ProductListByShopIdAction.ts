import { Request, Response } from 'express';
import { shopRepository } from '../repository/ShopRepository';
import { productRepository } from '../repository/ProductRepository';

export async function productListByShopIdAction(
  request: Request,
  response: Response
) {
  try {
    const { shopId } = request.params;

    const shop = await shopRepository.getById(Number(shopId));

    response.json(await productRepository.getByShop(shop));
  } catch (err) {
    response.status(404).send(err.message);
  }
}
