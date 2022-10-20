import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Info {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'infoNid',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  infoName: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;
}
