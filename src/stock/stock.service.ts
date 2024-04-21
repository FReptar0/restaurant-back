import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Stock } from "@prisma/client";

@Injectable()
export class StockService {
    constructor(private prisma: PrismaService) { }

    async getStocks(): Promise<Stock[]> {
        try {
            return await this.prisma.stock.findMany();
        } catch (error) {
            return null
        }
    }

    async getStockById(id: string) {
        return await this.prisma.stock.findUnique({
            where: { id },
        });
    }

    async createStock(data: Stock) {
        return await this.prisma.stock.create({ data });
    }

    async updateStock(id: string, data: Stock) {
        return await this.prisma.stock.update({
            where: { id },
            data,
        });
    }

    async deleteStock(id: string) {
        return await this.prisma.stock.delete({
            where: { id },
        });
    }
}