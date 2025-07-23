'use client';

import { FIXTURES_URL } from '@/constants/URLConstants';
import { convertMatchData } from '@/utils/dataConversion';
import { useEffect, useState } from 'react';
import { FixtureMatch } from '../../types/fixtureMatchType';

export default function FixturesPage() {
  const [matches, setMatches] = useState<FixtureMatch[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchScores = async () => {
    try {
      const res = await fetch(FIXTURES_URL, { cache: 'no-store' });
      const data = await res.json();
      const matchesData = convertMatchData(data.results || []);
      setMatches(matchesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  useEffect(() => {
    fetchScores(); 
    // const interval = setInterval(fetchScores, 10000); 
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Upcoming Matches</h1>   
       { loading ? (<p>Loading...</p> ) :
         (matches.length === 0)?( <p>No upcoming matches.</p>):
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matches.map((match) => (
            <li key={match.id} className="border p-4 rounded-lg">
                <p className="text-gray-600">{match.match_subtitle}</p>
              <h2 className="text-xl font-semibold">{match.homeTeamName} vs {match.awayTeamName} </h2>
                <p className="text-black-800"> {match.match_date}</p>
                <p className="text-gray-600 italic">{match.venue}</p>
              
            </li>
          ))}
        </ul>   
    }
    </div>
  );
}
