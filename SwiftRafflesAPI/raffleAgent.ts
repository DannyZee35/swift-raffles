import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client'

export default class RaffleAgent {
  prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  CreateRaffle(raffle: Prisma.RaffleCreateArgs['data']) {
    return this.prisma.raffle.create({ data: raffle });
  }

  GetRaffleById(raffleId: string) {
    return this.prisma.raffle.findFirst({ where: { id: raffleId } });

    // this.CreateRaffle({
    //   name: "",
    //   url: "",
    //   spots: 0,
    //   start_time: "",
    //   end_time: "",
    //   teamId: "235",
    //   show_avatar: false,
    //   auto_finalize: false,
    //   auto_announce: false,
    //   create_winners_thread: false,
    //   create_winners_role: false,
    //   direct_to_contract: false,
    //   req_email: false,
    //   req_wallet: false,
    //   req_discord: false,
    //   req_twitter: false,
    //   req_password: false,
    //   req_captcha: false
    // })
  }

  GetTeamRaffles(teamId: string) {
    return this.prisma.raffle.findMany({ where: { teamId: teamId } });
  }

  GetGuildsRaffles(guildId: string) {
    return this.prisma.raffle.findMany({
      where: { 
        Team: {
          guild_id: guildId
        }
      }
    });
  }
}