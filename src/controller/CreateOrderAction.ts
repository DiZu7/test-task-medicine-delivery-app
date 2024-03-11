import { Request, Response } from 'express';
import { createOrder } from '../service/OrderCreator';

export async function createOrderAction(request: Request, response: Response) {
  try {
    await createOrder(request.body);

    response.send({result: 'Success'});
  } catch (err) {
    response.status(404).send(err.message);
  }
}
