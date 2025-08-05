import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import logo from "../../public/images/logo.png";
import { pointstableColumnsHeader } from "@/constants/TableConstants";

import Image from "next/image";
import { convertPointsTableData } from "@/utils/dataConversion";
import { API_ENDPOINTS } from "@/constants/URLConstants";
import YearSelector from "@/utils/iplYearSelector";
import CommonErrorComponent from "@/utils/commonErrorComponent";

const tablecellTextStyle = "text-center ";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PointsTable({ searchParams }: PageProps) {
  const params = await searchParams || {};
  const year = params?.year ?? new Date().getFullYear().toString();
  const apiUrl = `${API_ENDPOINTS.GET_POINTS_TABLE}?year=${year}`;

  try {
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      return <CommonErrorComponent pageName="Points Table" />;
    }

    const data = await res.json();
    const pointsTableData = convertPointsTableData(data);

    return (
      <div className="container mx-auto p-4 justify-center">
        <h1 className="text-2xl font-bold mb-4 justify-self-center">
          Points Table
        </h1>
        <div className="flex justify-center mb-4">
          <YearSelector />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              {pointstableColumnsHeader.map((header, index) => (
                <TableHead
                  key={index}
                  className={tablecellTextStyle + " font-medium"}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pointsTableData.map((team) => (
              <TableRow key={team.teamId}>
                <TableCell className={tablecellTextStyle}>
                  {team.position}
                </TableCell>
                <TableCell>
                  <div className="ml-1 md:ml-4 flex space-x-2 w-auto">
                    <Image
                      src={team.teamLogo || logo}
                      alt={team.teamName}
                      width={20}
                      height={20}
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium whitespace-nowrap mr-10 md:mr-1">
                      {team.teamName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.matchesPlayed}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.matchesWon}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.matchesLost}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.matchesDrawn}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.netRunRate}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.forTeams}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.againstTeams}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.points}
                </TableCell>
                <TableCell className={tablecellTextStyle}>
                  {team.recentForm.split(",").map((form: string, index) => (
                    <span
                      key={index}
                      className={`${
                        form === "W"
                          ? "text-green-500"
                          : form === "L"
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                    >
                      {form + " "}
                    </span>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  } catch (error) {
    return <CommonErrorComponent pageName="Points Table" />;
  }
}
