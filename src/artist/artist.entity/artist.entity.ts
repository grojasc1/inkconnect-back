import { BookingEntity } from "../../booking/booking.entity/booking.entity";
import { UserEntity } from "../../user/user.entity/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => UserEntity, user => user.artist)
    user: UserEntity;

    @OneToMany(() => BookingEntity, booking => booking.artist_id)
    bookings: BookingEntity[];
}
