import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fd_mappings' })
export class FdMapping {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    opus_xi_id: number;

    @Column({ type: 'int', unsigned: true, nullable: false })
    beyond_cloud_company_territory_id: number;

    @Column({ type: 'char', length: 36, nullable: true })
    beyond_cloud_cem_tenant_id: string;

    @Column({ type: 'char', length: 36, nullable: true })
    created_by: string;

    @Column({ type: 'char', length: 36, nullable: true })
    updated_by: string;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;
    
}
