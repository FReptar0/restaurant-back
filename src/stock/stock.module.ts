import { PrismaModule } from "@/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { StockService } from "./stock.service";
import { StockController } from "./stock.controller";

@Module({
    controllers: [StockController],
    providers: [StockService],
    imports: [PrismaModule],
})
export class StockModule {}