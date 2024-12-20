import { UserEntity } from "../../user/user.entity/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    preferences: string;

    @Column()
    notes: string;

    @OneToOne(() => UserEntity, user => user.client)
    user: UserEntity;
}
