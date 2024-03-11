import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from './Product';
import { Order } from './Order';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.orderItems, {
    nullable: false,
  })
  product: Product;

  @ManyToOne(() => Order, (order) => order.items, { nullable: false })
  order: Order;

  @Column()
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor(product: Product, order: Order, quantity: number) {
    this.product = product;
    this.order = order;
    this.quantity = quantity;
  }
}
