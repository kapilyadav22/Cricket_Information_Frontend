import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import logo from "../../public/images/logo.png";
import Image from "next/image";
import { convertMatchSchedule } from "@/utils/dataConversion";
import CommonErrorComponent from "@/utils/commonErrorComponent";
import { API_ENDPOINTS } from "@/constants/URLConstants";
import YearSelector from "@/utils/iplYearSelector";
import { MatchSchedule } from "../../types/MatchScheduleTableType";


export default async function MatchScheduleTable({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {

  try {
    const params = await searchParams || {};
    const year = params?.year ?? new Date().getFullYear().toString();
    const apiUrl = `${API_ENDPOINTS.GET_MATCH_SCHEDULE}?year=${year}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      return <CommonErrorComponent pageName="Match Schedule" />;
    }
    const data = await res.json();
    const ScheduleData: MatchSchedule[] = convertMatchSchedule(data);
    return (
      <div className="container mx-auto p-4 justify-center">
        <h1 className="text-2xl font-bold mb-4 justify-self-center">
          Match Schedule
        </h1>
        <div className="flex justify-center mb-4">
          <YearSelector />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center font-medium">
                Match Date
              </TableHead>
              <TableHead className="text-center font-medium">
                Match Number
              </TableHead>
              <TableHead className="text-center font-medium">
                Location
              </TableHead>
              <TableHead className="text-center font-medium">
                First Team
              </TableHead>
              <TableHead className="text-center font-medium">
                First Team Score
              </TableHead>
              <TableHead className="text-center font-medium">
                First Team Overs
              </TableHead>
              <TableHead className="text-center font-medium">
                First Team Wickets
              </TableHead>
              <TableHead className="text-center font-medium">
                First Team Run Rate
              </TableHead>
              <TableHead className="text-center font-medium">
                Second Team
              </TableHead>
              <TableHead className="text-center font-medium">
                Second Team Score
              </TableHead>
              <TableHead className="text-center font-medium">
                Second Team Overs
              </TableHead>
              <TableHead className="text-center font-medium">
                Second Team Wickets
              </TableHead>
              <TableHead className="text-center font-medium">
                Second Team Run Rate
              </TableHead>
              <TableHead className="text-center font-medium">
                First Batting Summary
              </TableHead>
              <TableHead className="text-center font-medium">
                Second Batting Summary
              </TableHead>
              <TableHead className="text-center font-medium">
                Winning Team
              </TableHead>
              <TableHead className="text-center font-medium">
                Comments
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ScheduleData.map((match, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{match.MatchDate}</TableCell>
                <TableCell className="text-center">
                  {match.MatchNumber}
                </TableCell>
                <TableCell className="text-center">
                  {match.MatchLocation}
                </TableCell>
                <TableCell>
                  <div className="ml-1 md:ml-4 flex space-x-2  w-auto">
                    <Image
                      src={match.firstBattingTeamLogo}
                      alt={match.FirstBattingTeamName}
                      width={20}
                      height={20}
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium whitespace-nowrap mr-10 md:mr-1">
                      {match.FirstBattingTeamName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {match.FirstTeamScore}
                </TableCell>
                <TableCell className="text-center">
                  {match.FirstTeamOvers}
                </TableCell>
                <TableCell className="text-center">
                  {match.FirstTeamWickets}
                </TableCell>
                <TableCell className="text-center">
                  {match.FirstTeamRunRate}
                </TableCell>
                <TableCell className="text-center">
                  <div className="ml-1 md:ml-4 flex space-x-2  w-auto">
                    <Image
                      src={match.secondBattingTeamLogo}
                      alt={match.SecondBattingTeamName}
                      width={20}
                      height={20}
                    />
                    <span className="font-medium whitespace-nowrap mr-10 md:mr-1">
                      {match.SecondBattingTeamName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {match.SecondTeamScore}
                </TableCell>
                <TableCell className="text-center">
                  {match.SecondTeamOvers}
                </TableCell>
                <TableCell className="text-center">
                  {match.SecondTeamWickets}
                </TableCell>
                <TableCell className="text-center">
                  {match.SecondTeamRunRate}
                </TableCell>
                <TableCell className="text-center">
                  {match.FirstBattingSummary}
                </TableCell>
                <TableCell className="text-center">
                  {match.SecondBattingSummary}
                </TableCell>
                <TableCell className="text-center">
                  {match.WinningTeamID === match.AwayTeamID
                    ? match.AwayTeamName
                    : match.HomeTeamName}
                </TableCell>
                <TableCell className="text-center">{match.Comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  } catch (error) {
    return <CommonErrorComponent pageName="Match Schedule" />;
  }
}
