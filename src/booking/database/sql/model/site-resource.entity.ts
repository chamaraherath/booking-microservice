import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('site_resources')
export class SiteResource {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: true })
    oxi_resource_id: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    oxi_resource_service_type: string;

    @Column({ type: 'int', unsigned: true })
    service_type_id: number;

    @Column({ type: 'tinyint', default: false })
    is_default_resource: boolean;

    @Column({ type: 'varchar', length: 100 })
    resource_name: string;

    @Column({ type: 'tinyint', default: false })
    weekday_fix_start: boolean;

    @Column({ type: 'tinyint', default: false })
    allow_duplicate: boolean;

    @Column({ type: 'int', nullable: true })
    duration_min: number;

    @Column({ type: 'int', nullable: true })
    minimum_notice_hours: number;

    @Column({ type: 'tinyint', default: false })
    allow_saturday: boolean;

    @Column({ type: 'tinyint', default: false })
    allow_sunday: boolean;

    @Column({ type: 'time', nullable: true })
    weekday_start: Date;

    @Column({ type: 'time', nullable: true })
    weekday_end: Date;

    @Column({ type: 'time', nullable: true })
    saturday_start: Date;

    @Column({ type: 'time', nullable: true })
    saturday_end: Date;

    @Column({ type: 'time', nullable: true })
    sunday_start: Date;

    @Column({ type: 'time', nullable: true })
    sunday_end: Date;

    @Column({ type: 'varchar', length: 191, nullable: true })
    notes: string;

    @Column({ type: 'tinyint', default: true })
    is_active: boolean;

    @Column({ type: 'char', length: 36, nullable: true })
    created_by: string;

    @Column({ type: 'char', length: 36, nullable: true })
    updated_by: string;

    @Column({ type: 'int', nullable: true })
    additional_time: number;

    @Column({ type: 'tinyint', default: false })
    allow_weekday: boolean;

    @Column({ type: 'tinyint', default: false })
    allow_holiday: boolean;

    @Column({ type: 'tinyint', default: false })
    saturday_fix_start: boolean;

    @Column({ type: 'tinyint', default: false })
    sunday_fix_start: boolean;

    @Column({ type: 'tinyint', default: false })
    holiday_fix_start: boolean;

    @Column({ type: 'tinyint', default: false })
    weekday_is_custom: boolean;

    @Column({ type: 'tinyint', default: false })
    saturday_is_custom: boolean;

    @Column({ type: 'tinyint', default: false })
    sunday_is_custom: boolean;

    @Column({ type: 'tinyint', nullable: true })
    holiday_is_custom: boolean;

    @Column({ type: 'time', nullable: true })
    holiday_start: Date;

    @Column({ type: 'time', nullable: true })
    holiday_end: Date;

    @Column({ type: 'int', nullable: true, unsigned: true })
    territory_id: number;

    @Column({ type: 'tinyint', default: false })
    is_shared_resource: boolean;

    @Column({ type: 'varchar', length: 191, nullable: true })
    color_code: string;

    @Column({ type: 'datetime', nullable: true })
    deleted_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}
