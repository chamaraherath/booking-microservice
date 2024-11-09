import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'filed_library_selection_input_values' })
export class FieldLibrarySelectionInputValue {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 191, nullable: false })
    option_value: string;

    @Column({ type: 'varchar', length: 191, nullable: false })
    option_text: string;

    @Column({ type: 'int', unsigned: true, nullable: false })
    field_library_id: number;

    @Column({ type: 'tinyint', nullable: false })
    is_active: boolean;

    @Column({ type: 'int', unsigned: true, nullable: true })
    territory_id: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    opusxi_option_value: string;

    @Column({ type: 'datetime', nullable: true })
    deleted_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}