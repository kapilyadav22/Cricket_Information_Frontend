import Image from "next/image";
import { teamsNameandImagesMap } from "@/utils/teamsMap"; 

import { TEAM_LOGO_BASE_URL } from "@/constants/URLConstants";

export default function Teams() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-5">
      {Object.keys(teamsNameandImagesMap).map((teamName) => (
        <div
          key={teamName}
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border"
        >
          <Image
            src={`${TEAM_LOGO_BASE_URL}${teamsNameandImagesMap[teamName]}`}
            alt={`${teamName} Logo`}
            width={400}
            height={200}
            className="w-full h-48 object-contain bg-white"
          />
          <div className="p-4 justify-items-center">
            <h3 className="text-lg font-bold mb-1 ">{teamName}</h3>
            <p className="text-gray-600 text-sm">
              Official IPL team logo of {teamName}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
