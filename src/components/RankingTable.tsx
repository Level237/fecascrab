import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
  
  interface Achievement {
    title: string;
  }
  
  interface Player {
    number: number;
    name: string;
    achievements: Achievement[];
  }
  
  const players: Player[] = [
    {
      number: 1,
      name: "NKOUETE CHEWA King Josaphat",
      achievements: [
        { title: "Champion du Cameroun Elite Duplicate 2025" },
        { title: "Champion du Cameroun Elite Duplicate 2024" },
        { title: "Vainqueur des Masters Internationaux du Cameroun 2023" },
      ],
    },
    {
      number: 2,
      name: "SEUNDJEU Ivan",
      achievements: [
        { title: "Champion du Cameroun Elite Classique 2024" },
        { title: "Champion du Cameroun Elite Duplicate 2023" },
      ],
    },
    {
      number: 3,
      name: "LOVET Isaac Raymond",
      achievements: [
        { title: "Champion du Cameroun Elite Duplicate 2022" },
        { title: "Vice Champion du Cameroun Elite Duplicate 2019" },
        { title: "Champion du Cameroun Elite Blitz 2018" },
        { title: "Champion du Cameroun Elite Classique 2018" },
        { title: "Champion du Cameroun Elite Classique 2017" },
        { title: "Médaille de Bronze Duplicate des Masters Internationaux du Cameroun 2017" },
        { title: "Médaille de Bronze Classique des Masters Internationaux du Cameroun 2017" },
      ],
    },
    {
      number: 4,
      name: "TCHOUYO Eric Salvador",
      achievements: [
        { title: "Vainqueur du Défi des Masters Internationaux du Cameroun 2023" },
        { title: "Vice Champion du Camerù Elite Duplicate 2021" },
        { title: "Champion du Cameroun Elite Duplicate 2009" },
        { title: "Champion du Cameroun Elite Duplicate 2008" },
        { title: "Champion du Cameroun Elite Classique 2009" },
        { title: "Médaille d'Argent Duplicate des Masters Internationaux du Cameroun 2016" },
      ],
    },
    {
      number: 5,
      name: "TSOUNGUI Antoine Romain",
      achievements: [
        { title: "Vice Champion du Cameroun Elite Duplicate 2024" },
      ],
    },
    {
      number: 6,
      name: "DZEFACK Ervé",
      achievements: [
        { title: "Champion du Cameroun Elite Classique 2023" },
      ],
    },
    {
      number: 7,
      name: "LONLA SOCPA Jules Bernard",
      achievements: [
        { title: "Vice Champion du Cameroun Elite Classique 2024" },
        { title: "Champion du Cameroun Elite Classique 2016" },
        { title: "Champion du Cameroun Elite Classique 2008" },
      ],
    },
    {
        number: 8,
        name: "YENE AMOUGOU Pierre",
        achievements: [
          { title: "Vice Champion du Cameroun Elite Duplicate 2022" },
          { title: "Vice Champion du Cameroun Elite Duplicate 2020" },
          { title: "Champion du Cameroun Elite Classique 2020" },
        ],
      },
      {
        number: 9,
        name: "MOWA Youssofa",
        achievements: [
         
        ],
      },
      {
        number: 10,
        name: "EYENE Marium Bertrand Joel",
        achievements: [
         
        ],
      },
  ]
  
  export function RankingsTable() {
    return (
      <div className="container ">
        <Table>
          <TableHeader className="bg-emerald-700 ">
            <TableRow>
              <TableHead className="text-white text-xl max-sm:text-sm w-16 max-sm:w-2 py-4 px-12">N°</TableHead>
              <TableHead className="text-white text-xl max-sm:text-sm  w-64 max-sm:w-3   py-4">Joueur</TableHead>
              <TableHead className="text-white text-xl max-sm:text-sm max-sm:w-full  max-sm:py-2  w-80 py-4">Palmares Compétitions Nationales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow 
                key={player.number}
                className={player.number % 2 === 0 ? 'bg-emerald-100 py-4' : 'bg-emerald-50 py-4'}
              >
                <TableCell className="font-medium px-12">{player.number}</TableCell>
                <TableCell className="font-medium">{player.name}</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside space-y-1">
                    {player.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm">
                        {achievement.title}
                      </li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  