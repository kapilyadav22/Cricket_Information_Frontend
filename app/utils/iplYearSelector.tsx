'use client';

import { useRouter,usePathname, useSearchParams } from "next/navigation";
import { YEARSARRAY } from "./YearMaps";

export default function YearSelector() {
  const router = useRouter();
   const pathname = usePathname(); 
  const searchParams = useSearchParams();
  const currentYear = searchParams.get("year") || new Date().getFullYear().toString();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("year", newYear);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      className="w-20 border p-1 rounded-md mb-4"
      value={currentYear}
      onChange={handleChange}
    >
      {YEARSARRAY.map(
        (year) => (
          <option key={year} value={year}>
            {year}
          </option>
        )
      )}
    </select>
  );
}
