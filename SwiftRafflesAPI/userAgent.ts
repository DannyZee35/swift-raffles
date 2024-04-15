import {PrismaClient} from "@prisma/client";
import axios from "axios";

export default class UserAgent {
  prisma: PrismaClient;
  // discordClient: Discord.Client;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
    // this.discordClient = new Discord.Client({ intents: [] });
  }

  async GetUser(userId: string) {
    return this.prisma.user.findFirst({ where: { id: userId } });
  }

  async GetUserTeams(userId: string) {
    return this.prisma.user.findFirst({ where: { id: userId } }).Team();
  }

  GetUserAccount(userId: string) {
    return this.prisma.account.findFirst({ where: { userId: userId } });
  }

  async GetUserGuilds(userId: string): Promise<Guild[]> {
    const account = (await this.GetUserAccount(userId));

    const result = await axios(
        `https://discord.com/api/users/@me/guilds`,
        {
            method: 'GET',
            headers: {
               "Authorization": `${account?.token_type || ''} ${account?.access_token || ''}`
            }
        }
    );



    return await result.data as Guild[];
  }

  async GetUserAdministratorGuilds(userId: string): Promise<Guild[]> {
    const jsonData = await this.GetUserGuilds(userId)
     //0x08 = Administrator Flag (https://discord.com/developers/docs/topics/permissions)
    return jsonData.filter((element: Guild) => (element.permissions & 0x08) === 0x08)
  }

  async IsUserAdministrator(userId: string, guildId: string): Promise<boolean> {
    const jsonData = await this.GetUserAdministratorGuilds(userId)
    const guildObject = jsonData.find((element: Guild) => element.id === guildId)
    
    return guildObject !== undefined;
  }
}

type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: number;
    features: string[];
    permissions_new: string;
}