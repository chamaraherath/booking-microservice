import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Booking } from "./model/booking.entity";
import { BookingResourceAllocation } from "./model/booking-resource-allocation.entity";
import { BurialOrCRPlacement } from "./model/burial-cr-placement.entity";
import { Catering } from "./model/catering.entity";
import { Chapel } from "./model/chapel.entity";
import { Cremation } from "./model/cremation.entity";
import { Deceased } from "./model/deceased.entity";
import { FieldLibrarySelectionInputValue } from "./model/field-library-selection-input-value.entity";
import { SqlService } from "./service/sql.service";
import { SqlQueryBuilder } from "./service/query-builder.service";
import { Territory } from "./model/territory.entity";
import { TransactionType } from "./model/transaction-type.entity";
import { FdMapping } from "./model/fd-mapping.entity";
import { BookingStatus } from "./model/booking-status.entity";
import { Location } from "./model/location.entity";
import { SiteResource } from "./model/site-resource.entity";
import { ScreenCategorySiteMapping } from "./model/screen-category-site-mapping.entity";
import { FieldLibrary } from "./model/field-library.entity";
import { CompanySitePermission } from "./model/company-site-permission.entity";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forFeature([
            Booking, 
            BookingResourceAllocation, 
            BurialOrCRPlacement, 
            Catering, 
            Chapel, 
            Cremation, 
            Deceased, 
            FieldLibrarySelectionInputValue,
            Territory,
            TransactionType,
            FdMapping,
            BookingStatus,
            Location,
            SiteResource,
            ScreenCategorySiteMapping,
            FieldLibrary,
            CompanySitePermission
        ]),
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                port: parseInt(process.env.MYSQL_PORT),
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                entities: [],
                synchronize: false,
                autoLoadEntities: true
            }
        ),
    ],
    providers: [
        {
            provide: 'SqlService',
            useClass: SqlService
        },
        {
            provide: 'SqlQueryBuilder',
            useClass: SqlQueryBuilder
        },
    ],
    exports: [
        {
            provide: 'SqlService',
            useClass: SqlService
        },
        {
            provide: 'SqlQueryBuilder',
            useClass: SqlQueryBuilder
        },
    ]
})
export class SqlModule { }