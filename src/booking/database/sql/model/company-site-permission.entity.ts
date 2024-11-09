import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('company_site_permissions')
export class CompanySitePermission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'char', length: 36, nullable: true })
    created_by: string;

    @Column({ type: 'char', length: 36, nullable: true })
    updated_by: string;

    @Column({ type: 'int', nullable: true })
    to_territory_id: number;

    @Column({ type: 'int', nullable: true })
    from_territory_id: number;

}
