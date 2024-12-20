import { ArtistEntity } from "src/artist/artist.entity/artist.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StyleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => ArtistEntity, artist => artist.styles)
    artists: ArtistEntity[];
}
