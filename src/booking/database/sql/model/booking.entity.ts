import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    tran_OPSSaleID: string;

    @Column({ type: 'int', unsigned: true, nullable: false })
    transaction_type_id: number;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;
    
    @Column({ type: 'date', nullable: false })
    booking_date: Date;

    @Column({ type: 'char', length: 36, nullable: true })
    created_by: string;

    @Column({ type: 'char', length: 36, nullable: true })
    updated_by: string;

    @Column({ type: 'int', unsigned: true, nullable: false })
    booking_status: number;

    @Column({ type: 'varchar', length: 191, nullable: false })
    booking_reference: string;

    @Column({ type: 'tinyint', default: false })
    latest_listing: boolean;

    @Column({ type: 'tinyint', default: false })
    is_ox_booking: boolean;

    @Column({ type: 'int', unsigned: true, nullable: false })
    to_territory_id: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    from_territory_id: number;

    @Column({ type: 'tinyint', default: false })
    is_transaction_type_changed_from_opus_xi: boolean;

    @Column({ type: 'tinyint', default: false })
    is_cemetery_booking: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    tm_status: string;

    @Column({ type: 'varchar', length: 60, nullable: true })
    ox_record_type: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    opusxi_location_id: string;

    @Column({ type: 'tinyint', default: true })
    is_site_syncing: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    from_territory_name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}