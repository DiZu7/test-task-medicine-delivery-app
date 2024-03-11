import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrderItem } from './OrderItem';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  userAddress: string;

  @Column()
  userPhone: string;

  @Column('double')
  totalPrice: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    cascade: true,
  })
  
  items: OrderItem[];

  @CreateDateColumn()
  createdAt: Date;

  constructor(
    userName: string,
    userEmail: string,
    userAddress: string,
    userPhone: string
  ) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userAddress = userAddress;
    this.userPhone = userPhone;
  }
}
