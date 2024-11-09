import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'screen_categories' })
export class ScreenCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 191, nullable: false })
    category_name: string;

    @Column({ type: 'tinyint', default: true })
    is_active: number;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column({ type: 'tinyint', default: true })
    is_editable: number;
    
}
