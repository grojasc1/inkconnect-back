import { ReviewEntity } from "../../review/review.entity/review.entity";
import { BookingEntity } from "../../booking/booking.entity/booking.entity";
import { UserEntity } from "../../user/user.entity/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => BookingEntity, booking => booking.client_id)
    bookings: BookingEntity[];

    @OneToMany(() => ReviewEntity, review => review.client_id)
    reviews: ReviewEntity[];
}
