import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'field_library' })
export class FieldLibrary {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number;

    @Column({ type: 'varchar', length: 191, nullable: false })
    field_name: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    opus_xi_field_name: string | null;

    @Column({ type: 'varchar', length: 191, nullable: false })
    component_name: string;

    @Column({ type: 'int', unsigned: true, nullable: false })
    field_library_table_id: number;

    @Column({ type: 'varchar', length: 191, nullable: false })
    default_label_name: string;

    @Column({ type: 'varchar', length: 191, nullable: false })
    default_placeholder: string;

    @Column({ type: 'int', unsigned: true, nullable: false })
    default_screen_category_id: number;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}
