import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('burial_cr_placement')
export class BurialOrCRPlacement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_id: number;

    @Column({ type: 'tinyint', nullable: true })
    bucket_box_of_sand: boolean;

    @Column({ type: 'tinyint', nullable: true })
    canopy: boolean;

    @Column({ type: 'tinyint', nullable: true })
    extra_matting: boolean;

    @Column({ type: 'tinyint', nullable: true })
    lowering_device: boolean;

    @Column({ type: 'tinyint', nullable: true })
    pa_system: boolean;

    @Column({ type: 'tinyint', nullable: true })
    remove_ledger: boolean;

    @Column({ type: 'tinyint', nullable: true })
    shell_shoring: boolean;

    @Column({ type: 'tinyint', nullable: true })
    step: boolean;

    @Column({ type: 'tinyint', nullable: true })
    straps: boolean;

    @Column({ type: 'tinyint', nullable: true })
    umbrellas: boolean;

    @Column({ type: 'tinyint', nullable: true })
    urn_material: boolean;

    @Column({ type: 'tinyint', nullable: true })
    white_sandfill: boolean;

    @Column({ type: 'tinyint', nullable: true })
    witness_backfill: boolean;

    @Column({ type: 'varchar', length: 191, nullable: true })
    buggy: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    hearse_selection: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    interment_depth: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    location_and_rights_holder_details: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    lowering_by: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    new_grave_selection: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    urn_container_size: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    interment_location: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    no_chairs: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    no_shovels_spades: string;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}
