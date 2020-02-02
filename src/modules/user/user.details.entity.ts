import { BaseEntity, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users_details')
export class UserDetails extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, length: 50, nullable: false})
    name: string;
    
    @Column({type: 'varchar', nullable: true})
    lastname: string;

    @Column({type: 'varchar', default: 'ACTIVE', length: 8})
    status: string;

    @Column({type: 'timestamp', name: 'created_at'})
    create_at: Date;

    @Column({type: 'timestamp', name: 'update_at'})
    update_at: Date;

}