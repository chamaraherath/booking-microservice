import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 191, nullable: true })
  code: string;

  @Column({ type: 'int', nullable: true })
  inventory_status_id: number;

  @Column({ type: 'int', nullable: true })
  remains_type_id: number;

  @Column({ type: 'int', nullable: true })
  location_type_id: number;

  @Column({ type: 'tinyint', nullable: true })
  is_unlimited_capacity: number;

  @Column({ type: 'int', nullable: true })
  interment_capacity: number;

  @Column({ type: 'int', nullable: true })
  no_of_interments_used: number;

  @Column({ type: 'text', nullable: true })
  headstone_memorial_details: string;

  @Column({ type: 'tinyint', nullable: true })
  is_point_of_interest: number;

  @Column({ type: 'text', nullable: true })
  point_of_interest_details: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  latitude: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  longitude: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  added_source: string;

  @Column({ type: 'int', nullable: true })
  site_area_id: number;

  @Column({ type: 'int', nullable: true })
  holder_of_right_person_id: number;

  @Column({ type: 'varchar', length: 191, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 191, nullable: true })
  description: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'bigint', nullable: true })
  opus_xi_location_id: number;

  @Column({ type: 'char', length: 36, nullable: false })
  tenant_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'int', nullable: true })
  map_project_id: number;

  @Column({ type: 'int', nullable: true })
  lot_size: number;

  @Column({ type: 'varchar', length: 191, nullable: true })
  plot_number: string;

  @Column({ type: 'int', nullable: true })
  section_or_area_id: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  intra_map_url: string;

  @Column({ type: 'int', nullable: true })
  terr_id: number;

  @Column({ type: 'int', default: 0 })
  allow_proxy_vote: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  interment_alerts: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  reference_id: string;

}