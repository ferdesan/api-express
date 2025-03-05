import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("empresa")
export class Empresa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  cnpj!: string;

  @Column()
  endereco!: string;

  @Column()
  telefone!: string;

  @Column()
  email!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt!: Date;
}
