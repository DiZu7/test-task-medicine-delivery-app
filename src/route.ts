import { Request, Response } from 'express';

import { shopListAction } from './controller/ShopListAction';
import { productListByShopIdAction } from './controller/ProductListByShopIdAction';
import { createOrderAction } from './controller/CreateOrderAction';
import { productSwitchIsFavoriteAction } from './controller/ProductSwitchIsFavoriteAction';

type Route = {
  path: string;
  method: string;
  action: (request: Request, response: Response) => Promise<void>;
};

export const AppRoutes: Route[] = [
  {
    path: '/shops',
    method: 'get',
    action: shopListAction,
  },
  {
    path: '/products/:shopId',
    method: 'get',
    action: productListByShopIdAction,
  },
  {
    path: '/product-switch-is-favorite/:productId',
    method: 'post',
    action: productSwitchIsFavoriteAction,
  },
  {
    path: '/create-order',
    method: 'post',
    action: createOrderAction,
  },
];
