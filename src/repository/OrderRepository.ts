import { Order } from '../entity/Order';
import { AppDataSource } from '../data-source';

const repository = AppDataSource.getRepository(Order);

const save = async (order: Order): Promise<void> => {
  await repository.save(order);
};

export const orderRepository = {
	save,
}
