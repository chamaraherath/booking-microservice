import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('booking_resource_allocations')
export class BookingResourceAllocation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_id: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    site_resource_id: number;

    @Column({ type: 'bigint', nullable: true })
    comm_communication_id: string;

    @Column({ type: 'bigint', nullable: true })
    cmli_commLink_id: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    comm_action: string;

    @Column({ type: 'tinyint', default: false })
    created_from_forward_allocation_request: boolean;

    @Column({ type: 'date', nullable: true })
    allocation_date: Date;

    @Column({ type: 'time', nullable: true })
    allocation_from_time: Date;

    @Column({ type: 'time', nullable: true })
    allocation_to_time: Date;

    @Column({ type: 'tinyint', default: false })
    is_conflicted_with_opus_xi: boolean;

    @Column({ type: 'varchar', length: 10, nullable: true })
    booking_resource_status: string;

    @Column({ type: 'char', length: 36, nullable: true })
    created_by: string;

    @Column({ type: 'char', length: 36, nullable: true })
    updated_by: string;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;
    
}
