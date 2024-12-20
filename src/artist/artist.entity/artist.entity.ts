import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArtistEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    nickname: string;

    @Column()
    bio: string;

    @Column()
    address: string;

    @Column()
    social_media: string;
}
