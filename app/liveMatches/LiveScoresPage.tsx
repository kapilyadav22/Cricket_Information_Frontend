"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  CRICBUZZ_BASE_IMAGE_URL,
  LIVE_MATCHES_URL,
} from "@/constants/URLConstants";
import { LiveMatchesData, TeamScore } from "../../types/liveMatchDetails";
import { convertLiveMatchData } from "@/utils/dataConversion";

export default function LiveScoresPage() {
  const [matches, setMatches] = useState<LiveMatchesData>([]);
  const [loading, setLoading] = useState(true);
  const prevMatchesRef = useRef<LiveMatchesData>([]);

  const fetchScores = async () => {
    try {
      const res = await fetch(LIVE_MATCHES_URL, { cache: "no-store" });
      const data = await res.json();
      console.log(res);
      const matchesData = convertLiveMatchData(data.typeMatches || []);
      setMatches(matchesData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching scores:", err);
    }
  };

  useEffect(() => {
    fetchScores();
    // const interval = setInterval(fetchScores, 10000);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (matches && matches.length > 0) {
      prevMatchesRef.current = matches;
    }
  }, [matches]);

  const isScoreUpdated = (
    teamKey: "team1Score" | "team2Score" ,
    matchId: number,
    newScore?: TeamScore
  ) => {
    for (const match of prevMatchesRef.current) {
      const entry = Object.values(match)
        .flat()
        .find((m: any) => m.matchId === matchId);
        
      if (entry && newScore && entry.matchScore?.[teamKey]) {
        const prevScore = entry.matchScore[teamKey];
        return (
          newScore.runs !== prevScore.runs ||
          newScore.wickets !== prevScore.wickets ||
          newScore.overs !== prevScore.overs
        );
      }
    }
    return false;
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Live Cricket Scores
      </h1>

      {loading ? (
        <p className="text-center">Loading Page</p>
      ) : matches.length === 0 ? (
        <p className="text-center">No live matches</p>
      ) : (
        <div className="space-y-6">
          {matches.map((match) =>
            Object.entries(match).map(([matchType, matchList]) => (
              <div key={matchType}>
                <h2 className="text-lg sm:text-2xl font-semibold text-center">
                  {matchType}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {matchList.map((match) => (
                    <div
                      key={match.matchId}
                      className="border p-4 rounded-xl shadow  bg-white"
                    >
                      <div className="justify-items-center">
                        <h3 className="italic text-sm ">{match.matchDesc}</h3>
                        <p className="text-black font-bold text-sm mb-3">
                          {match.status}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        {[
                          {
                            team: match.teamA,
                            score: match.matchScore.team1Score,
                            key: "team1Score",
                          },
                          {
                            team: match.teamB,
                            score: match.matchScore.team2Score,
                            key: "team2Score",
                          },
                        ].map(({ team, score, key }) => {
                          const highlight = isScoreUpdated(
                            key as "team1Score" | "team2Score",
                            match.matchId,
                            score as TeamScore
                          );
                          const runs = score?.runs ?? "";
                          const wickets = score?.wickets ?? "";
                          const overs = score?.overs ?? "";

                          return (
                            <div
                              key={team.teamId}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-2">
                                <Image
                                  src={`${CRICBUZZ_BASE_IMAGE_URL}${team.imageId}/png`}
                                  alt={team.teamName}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                                <span className="text-sm font-medium">
                                  {team.teamName}
                                </span>
                              </div>
                              <div className="text-right   text-sm">
                                {runs && (
                                  <div
                                    className={`${
                                      highlight
                                        ? "text-green-600 font-bold animate-pulse"
                                        : "font-bold"
                                    }`}
                                  >
                                    {runs}/{wickets ? wickets : 0}
                                  </div>
                                )}
                                {overs && (
                                  <div
                                    className={`${
                                      highlight
                                        ? "text-blue-600 italic animate-pulse"
                                        : ""
                                    }`}
                                  >
                                    ({overs})
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <p className="italic text-xs mt-4 justify-self-center">
                        Venue: {match.venueInfo.ground}, {match.venueInfo.city}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
