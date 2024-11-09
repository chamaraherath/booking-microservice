import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transaction_types' })
export class TransactionType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    type_name: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    ox_transaction_type: string;

    @Column({ type: 'tinyint', nullable: false, default: true })
    is_active: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}
