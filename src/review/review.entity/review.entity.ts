import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    client_id: string;

    @Column()
    artist_id: string;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @Column()
    created_at: Date;
}
