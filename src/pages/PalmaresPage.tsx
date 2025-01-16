import { HeroSection } from '../components/HeroSection'
import HeaderSection from '../components/headerSection'
import slide from "../assets/club.jpeg"
import NavMobile from '../components/NavMobile'
import slide4Origine from "../assets/slide4Origine.jpg"
import slide5Origine from "../assets/slide5Origine.jpg"
import slide3Origine from "../assets/slide3origine.jpg"
import slide2Origine from "../assets/slide2Origine.jpg"
import slide6Origine from "../assets/slide6Origine.jpg"
import slide7Origine from "../assets/slide7Origine.jpg"
import slide8Origine from "../assets/slide8Origine.jpg"
import slide9Origine from "../assets/slide9Origine.jpg"
import slide10Origine from "../assets/slide10.jpg"
import slide11Origine from "../assets/slide11.jpg"
import slide12Origine from "../assets/slide12.jpg"
import { Award, Medal, Trophy } from 'lucide-react'
import medalOr from "../assets/gold medal.png"
import medalAr from "../assets/silver medal.png"
import medalBr from "../assets/bronze medal.png"
import palmares1 from "../assets/palmares1.jpg"
import { RankingsTable } from '../components/RankingTable'
import { ChampionshipTable } from '../components/ChampionsTable'
import { ChampionClassic } from '../components/ChampionClassic'
export default function PalmaresPage() {
  return (
    <section>
        <HeaderSection />
        <NavMobile/>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
      
    </div>

    <div className="max-w-7xl mx-24 max-sm:mx-2 px-4 py-16">
      <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-12 leading-tight">
        PALMARES DU CAMEROUN AUX CHAMPIONNATS
        <br />
        DU MONDE DE SCRABBLE FRANCOPHONE (CDM)
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* CDM 2021 */}
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
            CDM 2021 (Aix-les-Bains en FRANCE)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="mt-1">
                
                <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d&apos;Or en Elite Classique</div>
                <div className="text-lg font-bold">TCHOUYO Eric Salvador</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalAr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d&apos;Argent en Elite Classique</div>
                <div className="text-lg font-bold">ASSOMO Amédée</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalBr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille de Bronze en Coupe des nations</div>
              </div>
            </div>
          </div>
        </div>

        {/* CDM 2024 */}
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
            CDM 2024 (Montauban en FRANCE)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalAr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d&apos;Argent au Défi mondial</div>
                <div className="text-lg font-bold">SEUNDJEU Ivan</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                
              </div>
              <div>
                <div className="font-medium">4è place à l&apos;Elite Duplicate</div>
                <div className="text-lg font-bold">NKOUETE CHEWA King Josaphat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-24 max-sm:mx-2 px-4 py-2">
    <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-12 leading-tight">
        PALMARES DU CAMEROUN AUX CHAMPIONNATS
        <br />
        D’AFRIQUE DE SCRABB E (CHAMPAS) DE 2016 A 2024
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* CDM 2021 */}
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
            CHAMPAS 2016 (Lomé au TOGO)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="mt-1">
                
                <img src={medalBr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille de Bronze Elite Duplicate
                </div>
                <div className="text-lg font-bold">BALOG François Roland</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalBr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille de Bronze Blitz</div>
                <div className="text-lg font-bold">SEUNANG Patrick Ulrich</div>
              </div>
            </div>

          </div>
        </div>

        {/* CDM 2024 */}
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
          CHAMPAS 2019 (Brazzaville au Congo)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Coupe des Nations</div>
                
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalAr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Argent Elite Classique</div>
                <div className="text-lg font-bold">TCHEBE Stéphane Rodrigue</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
          CHAMPAS 2017 (Abidjan en Côte d’Ivoire)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">1 Médaille d’Or Elite Classique
                </div>
                <div className="text-lg font-bold">SEUNANG Patrick Ulrich</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Blitz</div>
                <div className="text-lg font-bold">SEUNANG Patrick Ulrich</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalAr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’argent Blitz</div>
                <div className="text-lg font-bold">BALOG François Roland</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
          CHAMPAS 2018 (Bamako au Mali)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Elite Classique

                </div>
                <div className="text-lg font-bold">BALOG Francois Roland</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Coupe des Nations</div>
               
              </div>
            </div>
           
          </div>
        </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">
          CHAMPAS 2021 (Dakar au Sénégal)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Elite Duplicate
                </div>
                <div className="text-lg font-bold">SEUNANG Patrick Ulrich</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Elite Classique
                </div>
                <div className="text-lg font-bold">Fonkeu NGAHAN Yannick</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Blitz
                </div>
                <div className="text-lg font-bold">TCHEBE Stéphane Rodrigue</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalOr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Or Coupe des Nations
                </div>
                
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalAr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille d’Argent Elite Classique
                </div>
                <div className="text-lg font-bold">BALOG François Roland</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                    <img src={medalBr} className='w-10 h-10' alt="" />
              </div>
              <div>
                <div className="font-medium">01 Médaille de Bronze Elite Classique
                </div>
                <div className="text-lg font-bold">SEUNANG Patrick Ulrich</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="max-w-7xl mx-24 max-sm:mx-2 px-4 py-2">
    <div className="relative mb-12 max-sm:hidden mt-12 h-[500px] flex-2">
          <img
            src={palmares1}
            alt="Partie de Scrabble en cours"
            className="rounded-lg object-cover  w-full h-full"
          />
        
        </div>

        <div>
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-12 leading-tight">
        Palmarès de TEAM Cameroun
      </h1>
      <RankingsTable/>
      
        </div>
        <div className='mt-12'>
        <h1 className="text-red-600 text-center text-2xl md:text-4xl font-bold mb-12 leading-tight">
        PALMARES DES MASTERS INTERNATIONAUX <br />
        DU CAMEROUN
      </h1>
      <h1 className='text-[#00723e] text-center text-2xl md:text-4xl font-bold mb-1 leading-tight'>Elite Duplicate</h1>
      <ChampionshipTable/>
      <h1 className='text-[#00723e] text-center text-2xl md:text-4xl font-bold mb-1 leading-tight'>Elite Classique</h1>
        <ChampionClassic/>
        </div>
    </div>
    </section>
  )
}
