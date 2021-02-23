
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
    TestResult,
    Prisma,
} from '@prisma/client';

@Injectable()
export class TestResultService {
    constructor(private prisma: PrismaService) { }

    async TestResult(TestResultWhereUniqueInput: Prisma.TestResultWhereUniqueInput): Promise<TestResult | null> {
        return this.prisma.testResult.findUnique({
            where: TestResultWhereUniqueInput,
        });
    }

    async TestResults(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TestResultWhereUniqueInput;
        where?: Prisma.TestResultWhereInput;
        orderBy?: Prisma.TestResultOrderByInput;
    }): Promise<TestResult[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.testResult.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createTestResult(data: Prisma.TestResultCreateInput): Promise<TestResult> {
        return this.prisma.testResult.create({
            data,
        });
    }

    async updateTestResult(params: {
        where: Prisma.TestResultWhereUniqueInput;
        data: Prisma.TestResultUpdateInput;
    }): Promise<TestResult> {
        const { data, where } = params;
        return this.prisma.testResult.update({
            data,
            where,
        });
    }

    async deleteTestResult(where: Prisma.TestResultWhereUniqueInput): Promise<TestResult> {
        return this.prisma.testResult.delete({
            where,
        });
    }
}
