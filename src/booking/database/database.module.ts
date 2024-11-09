import { Module } from "@nestjs/common";
import { NoSqlModule } from "./nosql/nosql.module";
import { SqlModule } from "./sql/sql.module";

@Module({
    imports: [SqlModule, NoSqlModule],
    providers: [],
    exports: [SqlModule, NoSqlModule]
})
export class DatabaseModule { }