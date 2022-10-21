import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

@Entity()
@ObjectType()
export class Upvote {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ default: 0 })
  @Field()
  upvotes: number;

  @ManyToOne(() => Skill, "upvotes")
  @Field(() => Skill)
  skill: Skill;

  @ManyToOne(() => Wilder, "upvotes", { onDelete: "CASCADE" })
  @Field(() => Wilder)
  wilder: Wilder;
}
