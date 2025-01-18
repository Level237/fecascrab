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
    champion: string;
    viceChampion: string;
    bronze: string;
  }
  
  const championshipData: ChampionshipEntry[] = [
    {
      number: 1,
      year: 2023,
      champion: "YENE AMOUGOU PIERRE",
      viceChampion: "RENGOU MOLUH JEAN GUY",
      bronze: "TSOUNGUI ANTOINE ROMAIN",
    },
    {
      number: 2,
      year: 2021,
      champion: "KAKOU TOYO CHRISTIAN",
      viceChampion: "BEME AMABAYA L. MARCEL STEVE",
      bronze: "SEUNDJEU IVAN",
    },
    {
      number: 3,
      year: 2019,
      champion: "DELANOE SULLIVAN",
      viceChampion: "ELONG NOËL ARSÈNE",
      bronze: "ILAGOU REKAWE SCHELICK",
    },
    {
      number: 4,
      year: 2018,
      champion: "SEUNANG PATRICK ULRICH",
      viceChampion: "MPAGA RETENO BELPHÉGORE",
      bronze: "ASSOMO AMÉDÉE",
    },
    {
      number: 5,
      year: 2017,
      champion: "BALOG FRANÇOIS ROLAND",
      viceChampion: "NDONGO OMGBA ETIENNE RIGOBERT",
      bronze: "ESSOMBA DANIEL BIENVENU",
    },
  ];
  
  /**
   * Renders a table of champion classic data.
   *
   * @returns {React.ReactElement} The table element.
   */
  export function ChampionClassic() {
    return (
      <div className="container mx-auto py-10">
       
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
                <TableCell className="text-center border-2">{entry.champion}</TableCell>
                <TableCell className="text-center border-2">{entry.viceChampion}</TableCell>
                <TableCell className="text-center border-2">{entry.bronze}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  