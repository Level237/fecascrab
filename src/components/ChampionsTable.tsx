import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
  
  interface ChampionshipEntry {
    number: number;
    year: number;
    champion: {
      name: string;
      percentage?: number;
    };
    viceChampion: {
      name: string;
      percentage?: number;
    };
    bronze: {
      name: string;
      percentage?: number;
    };
  }
  
  const championshipData: ChampionshipEntry[] = [
    {
      number: 1,
      year: 2023,
      champion: { name: "NKOUETE CHEWA K. J.", percentage: 98.25 },
      viceChampion: { name: "SEUNDJEU IVAN", percentage: 97.53 },
      bronze: { name: "TSOUNGUI ANTOINE", percentage: 96.14 },
    },
    {
      number: 2,
      year: 2021,
      champion: { name: "TCHEBE S. RODRIGUE", percentage: 98.99 },
      viceChampion: { name: "LAMA EUGENE", percentage: 98.50 },
      bronze: { name: "ZINGBE GUEU MATHIEU", percentage: 98.48 },
    },
    {
      number: 3,
      year: 2019,
      champion: { name: "BALOU BI SERI FRANCK", percentage: 99.97 },
      viceChampion: { name: "DELANOE SULLIVAN", percentage: 98.06 },
      bronze: { name: "SEUNANG PATRICK", percentage: 97.66 },
    },
    {
      number: 4,
      year: 2017,
      champion: { name: "ZINGBE GUEU MATHIEU", percentage: 98.99 },
      viceChampion: { name: "DELANOE SULLIVAN", percentage: 98.06 },
      bronze: { name: "SEUNANG PATRICK", percentage: 98.15 },
    },
    {
      number: 5,
      year: 2016,
      champion: { name: "BALOG FRANÇOIS ROLAND" },
      viceChampion: { name: "TCHOUYO ERIC SALVADOR" },
      bronze: { name: "LOVET ISAAC RAYMOND" },
    },
    {
      number: 6,
      year: 2016,
      champion: { name: "ALABI HABIB" },
      viceChampion: { name: "BALOG FRANÇOIS ROLAND" },
      bronze: { name: "MENGUE WILFRIED BRICE" },
    },
  ];
  
  export function ChampionshipTable() {
    return (
      <div className="container title-second mx-auto py-10">
        <Table className="border-2">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-center font-bold border-2">N°</TableHead>
              <TableHead className="text-center font-bold border-2">ANNÉE</TableHead>
              <TableHead className="text-center font-bold border-2">CHAMPION</TableHead>
              <TableHead className="text-center font-bold border-2">VICE-CHAMPION</TableHead>
              <TableHead className="text-center font-bold border-2">BRONZE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {championshipData.map((entry) => (
              <TableRow key={`${entry.year}-${entry.number}`} className="border-2">
                <TableCell className="text-center font-medium border-2">{entry.number}</TableCell>
                <TableCell className="text-center font-medium border-2">{entry.year}</TableCell>
                <TableCell className="text-center border-2">
                  {entry.champion.name}
                  {entry.champion.percentage && (
                    <span className="block text-sm text-gray-600">
                      ({entry.champion.percentage}%)
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-center border-2">
                  {entry.viceChampion.name}
                  {entry.viceChampion.percentage && (
                    <span className="block text-sm text-gray-600">
                      ({entry.viceChampion.percentage}%)
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-center border-2">
                  {entry.bronze.name}
                  {entry.bronze.percentage && (
                    <span className="block text-sm text-gray-600">
                      ({entry.bronze.percentage}%)
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  