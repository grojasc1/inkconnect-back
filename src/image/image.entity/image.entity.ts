import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    artist_id: string;

    @Column()
    url: string;

    @Column()
    description: string;

    @Column()
    tattooHouseId: string;
}
