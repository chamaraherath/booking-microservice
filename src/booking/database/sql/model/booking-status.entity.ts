import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'booking_status' })
export class BookingStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 191, nullable: false })
    status: string;

    @Column({ type: 'varchar', length: 191, nullable: false })
    opus_xi_status: string;

    @Column({ type: 'varchar', length: 191, nullable: false })
    opus_xi_status_display_text: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    fd_booking_status: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}
