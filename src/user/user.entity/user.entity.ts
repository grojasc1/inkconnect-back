import { ClientEntity } from "../../client/client.entity/client.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    created_at: Date;

    @OneToOne(() => ClientEntity, client => client.user_id)
    @JoinColumn()
    client: ClientEntity;
}
