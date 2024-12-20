import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookingEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    client_id: string;

    @Column()
    artist_id: string;

    @Column()
    date: Date;

    @Column()
    details: string;

    @Column()
    status: string;
}
