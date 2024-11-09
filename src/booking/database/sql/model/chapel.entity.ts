import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chapel_details')
export class Chapel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_id: number;

    @Column({ type: 'tinyint', default: false })
    animals_attending: boolean;

    @Column({ type: 'tinyint', nullable: true })
    back_load: boolean;

    @Column({ type: 'tinyint', nullable: true })
    balloon_release: boolean;

    @Column({ type: 'tinyint', nullable: true })
    carry_in: boolean;

    @Column({ type: 'tinyint', nullable: true })
    concierge_attendant: boolean;

    @Column({ type: 'tinyint', nullable: true })
    extra_time: boolean;

    @Column({ type: 'tinyint', nullable: true })
    keyboard: boolean;

    @Column({ type: 'tinyint', nullable: true })
    parking_attendant: boolean;

    @Column({ type: 'tinyint', nullable: true })
    remove_cross: boolean;

    @Column({ type: 'tinyint', nullable: true })
    rsl_service: boolean;

    @Column({ type: 'tinyint', nullable: true })
    viewing_in_chapel: boolean;

    @Column({ type: 'tinyint', nullable: true })
    webcasting: boolean;

    @Column({ type: 'int', unsigned: true, nullable: true })
    service_requirements: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    chapel_requests: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    no_easels: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    no_tables: string;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;
    
}