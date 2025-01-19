
import HeaderSection from '../components/headerSection'
import slide from "../assets/palmares-slide.jpg"
import NavMobile from '../components/NavMobile'
import medalOr from "../assets/gold medal.png"
import medalAr from "../assets/silver medal.png"
import medalBr from "../assets/bronze medal.png"
import palmares1 from "../assets/palmares1.jpg"
import palmares2 from "../assets/palmares2.jpg"
import { RankingsTable } from '../components/RankingTable'
import { ChampionshipTable } from '../components/ChampionsTable'
import { ChampionClassic } from '../components/ChampionClassic'
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import CtaInscription from '../components/Cta-inscription'
export default function PalmaresPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (

    <>
    {!loading && <section>
        <HeaderSection />
        <NavMobile/>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10  flex items-center justify-center relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
      <div className=' z-[50]  '>
        <h2 className='text-6xl title-font max-sm:text-6xl text-white font-bold '>Palmarès</h2>
      </div>
      <div className='absolute inset-0 bg-black opacity-30'>

      </div>
    </div>

    <div className="max-w-7xl mx-24 max-sm:mx-2 px-4 py-16">
      <h1 className="text-red-600 title-font text-4xl max-sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
        PALMARES DU CAMEROUN AUX CHAMPIONNATS
        
        DU MONDE DE SCRABBLE FRANCOPHONE (CDM)
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* CDM 2021 */}
        <div className="space-y-6 title-second">
          <h2 className="text-red-600 text-2xl max-sm:text-xl font-bold">
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
        <div className="space-y-6 title-second">
          <h2 className="text-red-600 text-2xl max-sm:text-xl  font-bold">
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
    <h1 className="text-red-600 title-font text-4xl max-sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
        PALMARES DU CAMEROUN AUX CHAMPIONNATS 


             D’AFRIQUE DE SCRABBLE (CHAMPAS) DE 2016 A 2024
      </h1>
      <div className="grid title-second md:grid-cols-2 gap-12">
        {/* CDM 2021 */}
        <div className="space-y-6">
          <h2 className="text-red-600 max-sm:text-xl  text-2xl font-bold">
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
          <h2 className="text-red-600 max-sm:text-xl  text-2xl font-bold">
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
          <h2 className="text-red-600 max-sm:text-xl  text-2xl font-bold">
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
          <h2 className="text-red-600 max-sm:text-xl  text-2xl font-bold">
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
          <h2 className="text-red-600 max-sm:text-xl  text-2xl font-bold">
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
    <div className="max-w-7xl mx-24 max-sm:mx-0 max-sm:px-0 px-4 py-2">
    <div className="relative mb-12  mt-12  flex-2">
          <img
            src={palmares1}
            alt="Partie de Scrabble en cours"
            className="rounded-lg object-contain  w-full h-full"
          />
        
        </div>

        <div className=''>
        <h1 className="text-red-600 mx-4 title-font text-4xl max-sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
        Palmarès de TEAM Cameroun
      </h1>
      <RankingsTable/>
      
        </div>
        <div className='mt-12'>
        <h1 className="text-red-600 mx-4 title-font text-center text-4xl max-sm:text-4xl md:text-5xl font-bold mb-12 leading-tight">
        PALMARES DES MASTERS INTERNATIONAUX <br />
        DU CAMEROUN
      </h1>
      <h1 className='text-[#00723e] text-center text-3xl md:text-4xl title-font font-bold mb-1 leading-tight'>Elite Duplicate</h1>
      <ChampionshipTable/>
      <h1 className='text-[#00723e] text-center text-3xl md:text-4xl title-font font-bold mb-1 leading-tight'>Elite Classique</h1>
        <ChampionClassic/>
        <h1 className='text-[#00723e] text-center text-3xl md:text-4xl title-font font-bold mb-1 leading-tight'>Défi</h1>
        <h1 className="text-red-600 text-center text-3xl  md:text-4xl title-font font-bold mb-6 leading-tight">
        BALOG FRANCOIS ROLAND (2021)<br />
        TCHOUYO ERIC SALVADOR (2023)
      </h1>
      <div className="relative mb-12  flex-2">
          <img
            src={palmares2}
            alt="Partie de Scrabble en cours"
            className="rounded-lg object-contain  w-full h-full"
          />
        
        </div>
        </div>
        
    </div>
    <CtaInscription/>
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
    
  )
}
