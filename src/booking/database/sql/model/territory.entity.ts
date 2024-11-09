import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SYS_territories')
export class Territory {

    @PrimaryGeneratedColumn()
    terr_id: number;

    @Column({ length: 36 })
    terr_tenant_id: string;

    @Column({ default: 0 })
    terr_parent_id: number;

    @Column({ length: 255 })
    terr_name: string;

    @Column({ default: 1 })
    terr_level: number;

    @Column({ nullable: true })
    country: number;

    @Column({ nullable: true })
    region_id: number;

    @Column({ nullable: true })
    site_id: number;

    @Column({ nullable: true })
    comp_id: number;

    @Column({ length: 36, nullable: true })
    terr_created_by: string;

    @Column({ length: 36, nullable: true })
    terr_updated_by: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    terr_created_at: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    terr_updated_at: Date;

    @Column({ nullable: true })
    deleted_at: Date;

    @Column({ nullable: true })
    billing_programme_id: number;

    @Column({ nullable: true })
    tax_group_id: number;

    @Column({ length: 36, nullable: true })
    site_ox1_id: string;

    @Column({ length: 255, nullable: true })
    site_ox1_url: string;

    @Column({ length: 191, nullable: true })
    website_url: string;

    @Column({ length: 191, nullable: true })
    site_form_description: string;

    @Column({ nullable: true })
    is_logical: boolean;

    @Column({ length: 191, nullable: true })
    mason_permit_email: string;

    @Column({ length: 36, nullable: true })
    deceased_search_api_key: string;

    @Column({ length: 255, nullable: true })
    tax_number: string;

    @Column({ nullable: true })
    is_brand: boolean;

    @Column({ nullable: true })
    is_crematoria: boolean;

    @Column({ nullable: true })
    default_map: number;

    @Column({ length: 255, nullable: true })
    address_1: string;

    @Column({ length: 255, nullable: true })
    address_2: string;

    @Column({ length: 255, nullable: true })
    contact_surname: string;

    @Column({ length: 255, nullable: true })
    contact_other_name: string;

    @Column({ length: 255, nullable: true })
    contact_phone: string;

    @Column({ length: 255, nullable: true })
    contact_email: string;

    @Column({ nullable: true })
    account_type: number;

    @Column({ length: 255, nullable: true })
    customer_phone_no: string;

    @Column({ length: 255, nullable: true })
    customer_email: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}