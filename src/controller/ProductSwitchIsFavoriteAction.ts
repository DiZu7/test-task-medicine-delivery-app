import { Request, Response } from 'express';
import { productRepository } from '../repository/ProductRepository';
import { productUpdater } from '../service/ProductUpdater';

export async function productSwitchIsFavoriteAction(
  request: Request,
  response: Response
) {
  try {
    const { productId } = request.params;

    const product = await productRepository.getById(Number(productId));

    await productUpdater.switchIsFavorite(product);

    response.send({ result: 'Success' });
  } catch (err) {
    response.status(404).send(err.message);
  }
}
