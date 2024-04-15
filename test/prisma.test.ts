import { sum } from './calc';
import { PrismaClient } from '@prisma/client';
// import TeamAgent, {TeamRoles} from '@/swiftrafflesapi/teamAgent';
import { env } from 'process';
// import dotenv and load ..env
// import dotenv from 'dotenv';

import TeamAgent, { TeamRoles } from "@/swiftrafflesapi/teamAgent";

let prisma: PrismaClient;

beforeAll(() => {
    console.log('beforeAll');

    let url = env.DATABASE_URL;
    if (url == undefined) {
        throw "DATABASE_URL is not set";
    }

    url.replace("dev-swiftraffles", "tests-swiftraffles");

    prisma = new PrismaClient({
        datasources: {
          db: {
            url: 'postgresql://postgres:preston@localhost:5432/',
          },
        },
     })
});

test('basic', async () => {
    const teamAgent = new TeamAgent(prisma);
    const res = await prisma.user.create({data: {}})
    const res2 = await prisma.user.findMany()
    console.log(res);
    console.log(res2);
});

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});