import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Shop } from './Shop';
import { OrderItem } from './OrderItem';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('double')
  price: number;

  @Column()
  isFavorite: boolean;

  @ManyToOne(() => Shop, (shop) => shop.products, { nullable: false })
  shop: Shop;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];

  @Column()
  imgPath: string;

  @CreateDateColumn()
  createdAt: Date;
}
