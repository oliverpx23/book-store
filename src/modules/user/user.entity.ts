import { BaseEntity, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { UserDetails } from './user.details.entity';
import { Role } from '../role/role.entity';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, length: 25, nullable: false})
    username: string;
    
    @Column({type: 'varchar', nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'varchar', default: 'ACTIVE', length: 8})
    status: string;

    @Column({type: 'timestamp', name: 'created_at'})
    create_at: Date;

    @ManyToMany(type => Role, role => role.users)
    @JoinTable({ name: 'user_roles' })
    roles: Role[];

    @Column({type: 'timestamp', name: 'update_at'})
    update_at: Date;

    @OneToOne(type=>UserDetails, {
        cascade: true, 
        nullable: false, 
        eager: true
    })
    @JoinColumn({name: 'detail_id'})
    details: UserDetails;
    


}