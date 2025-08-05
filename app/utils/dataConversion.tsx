import { FixtureMatch } from "../../types/fixtureMatchType";
import { LiveMatchesData } from "../../types/liveMatchDetails";
import { MatchSchedule } from "../../types/MatchScheduleTableType";
import { PointsTableDashBoardType } from "../../types/pointsTableDashBoardType";

const convertPointsTableData = (data: any[]): PointsTableDashBoardType[] => {
  return data.map((item) => ({
    teamId: item.TeamID,
    position: parseInt(item.OrderNo, 10),
    teamName: item.TeamName,
    teamLogo: item.TeamLogo,
    matchesPlayed: parseInt(item.Matches, 10),
    matchesWon: parseInt(item.Wins, 10),
    matchesLost: parseInt(item.Loss, 10),
    matchesDrawn: parseInt(item.Draw, 10),
    netRunRate: parseFloat(item.NetRunRate),
    forTeams: item.ForTeams,
    againstTeams: item.AgainstTeam,
    recentForm: item.Performance,
    points: parseInt(item.Points, 10),
  }));
};

function convertMatchSchedule(scheduledata: any[]): MatchSchedule[] {
  return scheduledata.map((item) => ({
    MatchDate: item.MatchEndDate ?? "",
    MatchNumber: Number(item.RowNo) || 0,
    MatchLocation: item.GroundName ?? "",

    FirstTeamScore: item["1FallScore"] ?? "-",
    SecondTeamScore: item["2FallScore"] ?? "-",

    FirstTeamOvers: item["1FallOvers"] ?? "-",
    SecondTeamOvers: item["2FallOvers"] ?? "-",

    FirstTeamWickets: Number(item["1FallWickets"]) || 0,
    SecondTeamWickets: Number(item["2FallWickets"]) || 0,

    FirstTeamRunRate: item["1RunRate"] ?? "-",
    SecondTeamRunRate: item["2RunRate"] ?? "-",

    FirstBattingSummary: item.FirstBattingSummary ?? "",
    SecondBattingSummary: item.SecondBattingSummary ?? "",

    AwayTeamID: Number(item.AwayTeamID) || 0,
    HomeTeamID: Number(item.HomeTeamID) || 0,

    HomeTeamLogo: item.HomeTeamLogo ?? "",
    AwayTeamLogo: item.AwayTeamLogo ?? "",

    firstBattingTeamLogo:
      item.HomeTeamName === item.FirstBattingTeamName
        ? item.HomeTeamLogo ?? ""
        : item.AwayTeamLogo ?? "",

    secondBattingTeamLogo:
      item.HomeTeamName === item.FirstBattingTeamName
        ? item.AwayTeamLogo ?? ""
        : item.HomeTeamLogo ?? "",

    FirstBattingTeamName: item.FirstBattingTeamName ?? "",
    SecondBattingTeamName: item.SecondBattingTeamName ?? "",

    HomeTeamName: item.HomeTeamName ?? "",
    AwayTeamName: item.AwayTeamName ?? "",

    Comments: item.Comments ?? "",

    FirstBattingTeamCode: item.FirstBattingTeamCode ?? "",
    SecondBattingTeamCode: item.SecondBattingTeamCode ?? "",

    WinningTeamID: Number(item.WinningTeamID) || 0,

    city: item.city ?? "",
  }));
}

function convertMatchData(data: any[]): FixtureMatch[] {
  return data.map((item) => ({
    id: item.id,
    homeTeamName: item.home.name,
    awayTeamName: item.away.name,
    match_title: item.match_title,
    match_subtitle: item.match_subtitle,
    match_date: new Date(item.date).toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }),
    venue: item.venue,
  }));
}

 //we have 0,1,2 typesOfMatches
  //0 - International
  //1 - League
  //2- Women's League
export function convertLiveMatchData(data: any[]): LiveMatchesData {
  return data.map((match) => {
    const allMatches = match.seriesMatches?.flatMap(
      (series: any) => series.seriesAdWrapper?.matches ?? []
    ) ?? [];

    const formattedMatches = allMatches
      .filter((obj: any) => obj?.matchInfo)
      .map((obj: any) => {
        const info = obj.matchInfo;
        const score = obj.matchScore ?? {};

        return {
          matchId: info.matchId,
          matchDesc: info.matchDesc,
          matchFormat: info.matchFormat,
          status: info.status,
          teamA: {
            imageId: info.team1?.imageId,
            teamId: info.team1?.teamId,
            teamName: info.team1?.teamName,
            teamSName: info.team1?.teamSName,
          },
          teamB: {
            imageId: info.team2?.imageId,
            teamId: info.team2?.teamId,
            teamName: info.team2?.teamName,
            teamSName: info.team2?.teamSName,
          },
          venueInfo: {
            city: info.venueInfo?.city,
            ground: info.venueInfo?.ground,
            id: info.venueInfo?.id,
            latitude: info.venueInfo?.latitude,
            longitude: info.venueInfo?.longitude,
            timezone: info.venueInfo?.timezone,
          },
          matchScore: {
            team1Score: score.team1Score?.inngs1 ?? null,
            team2Score: score.team2Score?.inngs1 ?? null,
          },
        };
      });

    return {
      [match.matchType]: formattedMatches,
    };
  });
}



export { convertPointsTableData, convertMatchSchedule, convertMatchData };
