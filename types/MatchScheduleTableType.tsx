export interface MatchSchedule {
  MatchDate: string;
  MatchNumber: number;
  MatchLocation: string;

  FirstTeamScore: string;
  SecondTeamScore: string;

  FirstTeamOvers: string;
  SecondTeamOvers: string;

  FirstTeamWickets: number;
  SecondTeamWickets: number;

  FirstTeamRunRate: string;
  SecondTeamRunRate: string;

  FirstBattingSummary: string;
  SecondBattingSummary: string;

  AwayTeamID: number;
  HomeTeamID: number;

  HomeTeamLogo: string;
  AwayTeamLogo: string;

  firstBattingTeamLogo: string;
  secondBattingTeamLogo: string;

  FirstBattingTeamName: string;
  SecondBattingTeamName: string;

  HomeTeamName: string;
  AwayTeamName: string;

  Comments: string;

  FirstBattingTeamCode: string;
  SecondBattingTeamCode: string;

  WinningTeamID: number;

  city: string;
}
