import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cremation_details')
export class Cremation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_id: number;

    @Column({ type: 'tinyint', nullable: true })
    arrange_doctor_verification: boolean;

    @Column({ type: 'tinyint', nullable: true })
    auth_person_collect: boolean;

    @Column({ type: 'tinyint', nullable: true })
    bone_pick: boolean;

    @Column({ type: 'tinyint', nullable: true })
    customs_letter: boolean;

    @Column({ type: 'tinyint', nullable: true })
    early_delivery: boolean;

    @Column({ type: 'tinyint', nullable: true })
    interstate_overseas: boolean;

    @Column({ type: 'tinyint', nullable: true })
    urgent_collection: boolean;

    @Column({ type: 'tinyint', nullable: true })
    urgent_cremation: boolean;

    @Column({ type: 'tinyint', nullable: true })
    witness_cremation: boolean;

    @Column({ type: 'int', unsigned: true, nullable: true })
    cremation_service_type: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    cremation_type: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    medical_certificate_type: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    urn_container_type: number;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}
