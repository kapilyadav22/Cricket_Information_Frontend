import { platform } from "os";
import Image from "next/image";
import LiveScoresPage from "./LiveScoresPage";
import FixturesPage from "@/fixtures/page";

const LiveMatchesPage = () => {
  return (
    <div className="container mx-auto p-4 justify-items-center">
      <div className="text-center mb-4"></div>
      <LiveScoresPage />
      <div className="w-full text-center my-4">
        <FixturesPage />
      </div>
    </div>
  );
};

export default LiveMatchesPage;
