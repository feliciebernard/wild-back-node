import { Skill } from "./entities/Skill";
import { Upvote } from "./entities/Upvote";
import { Wilder } from "./entities/Wilder";
import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "supersecret",
  database: "postgres",
  synchronize: true,
  entities: [Wilder, Skill, Upvote],
  logging: ["query", "error"],
});

export default datasource;
