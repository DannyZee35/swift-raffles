import { Prisma, PrismaClient } from "@prisma/client";
import UserAgent from "./userAgent";

export default class TeamAgent {
  prisma: PrismaClient;
  userAgent: UserAgent;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
    this.userAgent = new UserAgent(prismaClient);
  }

  CreateTeam(team: Prisma.TeamCreateArgs["data"]) {
    return this.prisma.team.create({ data: team }).then((team) =>
      this.AddTeamMember(team.id ?? "", team.userId ?? "", TeamRoles.owner))
  }

  GetTeam(teamId: string) {
    return this.prisma.team.findFirst({ where: { id: teamId } });
  }

  GetTeamMember(teamId: string, userId: string) {
    return this.prisma.teamMember.findFirst({
      where: { teamId: teamId, userId: userId },
    });
  }

  GetTeamMembers(teamId: string) {
    return this.prisma.team
      .findFirst({ where: { id: teamId } });
  }

  async AddTeamMember(teamId: string, userId: string, role: TeamRoles) {
    if ((await this.userAgent.GetUser(userId)) == null) {
      throw "No user exists with id: " + userId;
    }

    if ((await this.GetTeam(teamId)) == null) {
      throw "No team exists with id: " + teamId;
    }

    if ((await this.GetTeamMember(teamId, userId)) != null) {
      throw "User is already a member of this team";
    }

    return this.prisma.teamMember.create({
      data: { id: undefined, userId: userId, role: role, teamId: teamId },
    });
  }

  UserCanManageTeam(userId: string, teamId: string) {
    return (
      this.prisma.teamMember.findFirst({
        where: {
          userId: userId,
          teamId: teamId,
          role: TeamRoles.owner || TeamRoles.manager,
        },
      }) != null
    );
  }

  UserCanCreateRaffle(userId: string, teamId: string) {
    return (
      this.prisma.teamMember.findFirst({
        where: {
          userId: userId,
          teamId: teamId,
          role: TeamRoles.owner || TeamRoles.creator,
        },
      }) != null
    );
  }

  UserCanViewRaffle(userId: string, teamId: string) {
    return (
      this.prisma.teamMember.findFirst({
        where: {
          userId: userId,
          teamId: teamId,
          role:
            TeamRoles.owner ||
            TeamRoles.creator ||
            TeamRoles.manager ||
            TeamRoles.member,
        },
      }) != null
    );
  }
}

class UserUnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserUnauthorizedException";
  }
}

export enum TeamRoles {
  "owner" = "Owner",
  "creator" = "Creator",
  "manager" = "Manager",
  "member" = "Member",
}
