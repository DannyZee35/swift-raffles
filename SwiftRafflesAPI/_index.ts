// THIS IS TESTS ONLY

import UserAgent from "@/swiftrafflesapi/userAgent";
import RaffleAgent from "@/swiftrafflesapi/raffleAgent";
import TeamAgent, { TeamRoles } from "@/swiftrafflesapi/teamAgent";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userAgent = new UserAgent(prisma);
const raffleAgent = new RaffleAgent(prisma);
const teamAgent = new TeamAgent(prisma);

function addUserToTeamTest() {
    teamAgent.AddTeamMember("1ed338b7-ee33-4f1c-b375-a4db3f1240c5", "clehhcyf900003cd1zah9mcbe", TeamRoles.owner).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    });
}

function createTeamTest() {
    teamAgent.CreateTeam({
        guild_id: '12312312',
        userId: 'clehhcyf900003cd1zah9mcbe',
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    });
    // teamAgent.CreateTeam({allowed_users: undefined, id: undefined, guild_id: '12312312', owner: undefined, userId: "clehhcyf900003cd1zah9mcbe"}).then((res) => {});
}

async function getUserGuildsTest() {
    console.log(await userAgent.GetUserGuilds('clepwqy8i0000vmw83j14jzdj'))
}

async function isUserAdministratorTest() {
    await userAgent.IsUserAdministrator('clepwqy8i0000vmw83j14jzdj', '958806596606107649')
    return await userAgent.GetUserGuilds('clepwqy8i0000vmw83j14jzdj')
}

export { addUserToTeamTest, createTeamTest, getUserGuildsTest, isUserAdministratorTest };
