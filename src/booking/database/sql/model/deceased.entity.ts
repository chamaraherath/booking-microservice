import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'deceased_information' })
export class Deceased {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booking_id: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_address_1: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_address_2: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_email: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    service_to_be_paid_by: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    service_type: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    size_of_coffin_casket: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    status: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    transaction_type: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_state: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    xi_sales_id: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    funeral_company_id: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    site_id: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_given_names: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_surname: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    coffin_type: number;

    @Column({ type: 'varchar', length: 191, nullable: true })
    deceased_first_name: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    deceased_surname: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    pre_purchase_details: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    function_catering_requested: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    payment: number;

    @Column({ type: 'text', nullable: true })
    details_and_requests: string;

    @Column({ type: 'tinyint', nullable: true })
    large_service: boolean;

    @Column({ type: 'tinyint', nullable: true })
    over_sized: boolean;

    @Column({ type: 'tinyint', nullable: true })
    private: boolean;

    @Column({ type: 'tinyint', nullable: true })
    casket: boolean;

    @Column({ type: 'tinyint', nullable: true })
    coffin: boolean;

    @Column({ type: 'char', length: 36, nullable: true })
    funeral_arranger: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    service_date: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    function_catering_date_and_time: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    deceased_date_of_birth: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    deceased_date_of_death: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    weight: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    width: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_phone: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_postcode: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    height: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    length: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    no_attendees: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_city_suburb: string;

    @Column({ type: 'varchar', length: 191, nullable: true })
    authoriser_country: string;

    @Column({ type: 'int', nullable: true })
    minister_or_celebrant: number;

    @Column({ type: 'int', nullable: true })
    venue_other: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    service_venue_type: string;

    @Column({ type: 'int', unsigned: true, nullable: true })
    authoriser_person_id: number;

    @Column({ type: 'int', unsigned: true, nullable: true })
    deceased_person_id: number;

    @Column({ type: 'timestamp', nullable: true })
    created_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    reference_id: string;

}