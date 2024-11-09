import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'catering_details' })
export class Catering {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_id: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    catering_requests: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    menu: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    no_function_attendees: string;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}
