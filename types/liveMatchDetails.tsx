type VenueInfo = {
  city?: string;
  ground?: string;
  id: number;
  latitude?: string;
  longitude?: string;
  timezone?: string;
};

type Team = {
  imageId: number;
  teamId: number;
  teamName: string;
  teamSName : string;
}

type TeamScore = {
  inningsId: number;
  runs: string;
  overs: string;
  wickets: number;
};

type LiveMatchesData = {
  [matchType: string]: MatchDetails[]; 
};

type MatchDetails = {
  matchId: number;
  matchDesc: string;
  matchFormat: string;
  team1 : Team;
  team2 : Team;
  status: string;
  venueInfo : VenueInfo;
  matchScore: {
      team1Score: TeamScore | null;
      team2Score: TeamScore | null;
    };
};

export type { LiveMatchesData, MatchDetails, VenueInfo, Team, TeamScore };