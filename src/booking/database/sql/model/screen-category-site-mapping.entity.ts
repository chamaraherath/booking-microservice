import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'transaction_type_screen_category_site_mapping' })
export class ScreenCategorySiteMapping {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    transaction_type: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    screen_category: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    sort_order: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    service_type_id: number;

    @Column({ type: 'tinyint', default: true })
    is_active: boolean;

    @Column({ type: 'tinyint', default: false })
    is_mandatory: boolean;

    @Column({ type: 'tinyint', default: false })
    is_required: boolean;

    @Column({ type: 'int', unsigned: true, nullable: false })
    territory_id: number;

}
