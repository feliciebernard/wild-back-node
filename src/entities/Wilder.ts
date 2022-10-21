import { Length } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Upvote } from "./Upvote";

@Entity()
@ObjectType()
export class Wilder {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  city: string;

  @OneToMany(() => Upvote, "wilder")
  @Field(() => [Upvote])
  upvotes: Upvote[];
}

@InputType()
export class WilderInput {
  @Field()
  @Length(2, 50) // don't forget Li
  name: string;

  @Field({ nullable: true })
  city: string;
}
