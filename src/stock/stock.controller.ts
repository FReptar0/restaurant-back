import { Controller, Get } from "@nestjs/common";
import { StockService } from "./stock.service";

@Controller("stock")
export class StockController {
    constructor(private readonly stockService: StockService) { } 

    @Get()
    async getStocks() {
        return await this.stockService.getStocks();
    }
}