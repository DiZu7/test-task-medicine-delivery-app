import { Request, Response } from 'express';
import { shopRepository } from '../repository/ShopRepository';


export async function shopListAction(request: Request, response: Response) {
	try {
		response.json(await shopRepository.getAll());
	} catch (err) {
		response.sendStatus(404);
	}
}
