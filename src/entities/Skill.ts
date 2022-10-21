import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Upvote } from "./Upvote";

@Entity()
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Upvote, "skill")
  @Field(() => [Upvote])
  upvotes: Upvote[];
}
