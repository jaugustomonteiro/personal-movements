import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movements')
class Movement {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: string;

  @Column()
  transaction: string;

  @Column()
  description: string;

  @Column('decimal')
  value: number;

  @Column('timestamp with time zone')
  expire_date: Date;

  @Column()
  paid_account: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Movement;
