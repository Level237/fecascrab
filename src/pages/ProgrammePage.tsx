import HeaderSection from '../components/headerSection'
import slide from "../assets/team.jpg"
import NavMobile from '../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import { Separator } from '../components/ui/separator'
import { Calendar } from 'lucide-react'


export default function ProgrammePage() {
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
        <NavMobile />
        <div style={{ background: `url(${slide})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          className='z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0 bg-[#02abee]'>
         <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 max-sm:left-12 bg-red-600'>
            <h2 className='text-4xl max-sm:text-3xl title-font text-white font-bold  '>Programme</h2>
        </div>
        </div>

        <section className='flex title-second mt-16 flex-col justify-center max-sm:mx-4 mx-24 gap-6'>
          <div>
            <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>PROGRAMME DE LA COMPÉTITION</h2>
          </div>
          <div>
            <Separator className='bg-[#00723e]' />
          </div>

          <div className='space-y-6 text-xl'>
            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>10 mars :</span> Accueil des délégations à Douala avec un apéro dînatoire à l'hôtel Ibis Bonanjo à 20h00 (accès sur invitation uniquement).</p>
            </div>

            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>11 mars :</span> Départ en bus pour le site de la compétition à 10h00. Arrivée prévue à 12h00, suivie de la répartition des chambres et du déjeuner.</p>
            </div>

            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>12 mars :</span> Début de la compétition officielle.</p>
            </div>

            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>13 mars :</span> Cérémonie d'ouverture en présence des autorités avec une parade par pays. Pensez à apporter une tenue représentant votre pays ainsi que votre drapeau.</p>
            </div>

            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>14 et 15 mars :</span> Poursuite des épreuves. En simultané, le 15 mars aura lieu la grande finale du Championnat Junior Scolaire National.</p>
            </div>

            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>16 mars :</span> Dernière journée de compétition et cérémonie de clôture.</p>
            </div>

            <div className='flex items-start gap-4'>
              <Calendar className='text-red-500 mt-1' />
              <p><span className='font-bold'>17 mars :</span> Départ des délégations.</p>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <p className='text-2xl font-bold text-[#00723e]'>Pour plus d'informations, contactez-nous :</p>
            <a 
              href="https://wa.me/237655767806" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-xl text-blue-600 hover:text-blue-800 underline'
            >
              WhatsApp: +237 655 767 806
            </a>
          </div>
        </section>

        
        <Footer />
      </section>}

      {loading && <Loader />}
    </>
  )
} 