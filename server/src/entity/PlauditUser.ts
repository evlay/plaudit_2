import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PlauditUser {

    @PrimaryGeneratedColumn()
    id!: number;
 
    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    createdOn!: number;

}
