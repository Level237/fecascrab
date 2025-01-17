
import HeaderSection from '../components/headerSection'
import slide from "../assets/word-events-is-written-wooden-cubes-diary-near-handle.jpg"
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
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import event1 from "../assets/Slide01.jpg"
import event2 from "../assets/Slide02.jpg"
import event3 from "../assets/CHAMPAS 2019.jpg"
import event1Respo from "../assets/SuperLeagueScrabble_VisuelOfficiel_AllSmart2024.jpg"
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
export default function EventPage() {


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
    {!loading &&  <section>
        <HeaderSection />
        <NavMobile/>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
        
    </div>

        <section className='flex mt-16 flex-col max-sm:mx-2 mx-24 gap-6'>
        <div className="relative max-sm:hidden h-[30rem] flex-2">
        <img
          src={event1}
          alt="Partie de Scrabble en cours"
          className="rounded-lg object-cover  w-full h-full"
        />
      
      </div>
      <div className="relative hidden max-sm:block h-[30rem] flex-2">
        <img
          src={event1Respo}
          alt="Partie de Scrabble en cours"
          className="rounded-lg object-cover  w-full h-full"
        />
      
      </div>
      <div>
        <h2 className='text-4xl  max-sm:text-2xl font-bold text-[#107a5f]'>SUPER MASTER 2025: UNE EXPERIENCE <br className='max-sm:hidden' />UNIQUE AU CAMEROUN</h2>
      </div>

      <div>
        <p className='text-3xl max-sm:text-lg'>Rejoignez-nous pour vivre un moment d'exception, où compétition rime <br className='max-sm:hidden' />
        avec excellence et découverte !</p>
      </div>
      <div className='flex justify-center max-sm:justify-start'>
        <Button className='text-white px-7 rounded-2xl py-6 bg-red-600 text-xl'>En Savoir plus</Button>
      </div>
        </section>
        <section className='grid grid-cols-2 max-sm:grid-cols-1 mt-12 max-sm:mx-2 mx-24 gap-6'>

        <section className='flex mt-16 flex-col max-sm:mx-2  gap-6'>
        <div className="relative  h-[30rem] flex-2">
        <img
          src={event2}
          alt="Partie de Scrabble en cours"
          className="rounded-lg object-cover  w-full h-full"
        />
      
      </div>
  
      <div>
        <h2 className='text-4xl  max-sm:text-2xl font-bold text-[#107a5f]'>Le Scrabble Scolaire : Une formation pour l'Avenir</h2>
      </div>

      <div>
        <p className='text-2xl max-sm:text-lg'>Le Scrabble scolaire au Cameroun
est bien plus qu’un simple jeu. Il
est un puissant outil éducatif.
</p>
      </div>
      <div className='flex'>
        <Button className='text-white px-7 rounded-2xl py-6 bg-red-600 text-xl'>En Savoir plus</Button>
      </div>
        </section>
        <section className='flex mt-16 flex-col max-sm:mx-2  gap-6'>
        <div className="relative  h-[30rem] flex-2">
        <img
          src={event3}
          alt="Partie de Scrabble en cours"
          className="rounded-lg object-cover  w-full h-full"
        />
      
      </div>
  
      <div>
        <h2 className='text-4xl  max-sm:text-2xl font-bold text-[#107a5f]'>Selection Nationale de
        Scrabble du Cameroun</h2>
      </div>

      <div>
        <p className='text-2xl max-sm:text-lg'>Depuis 2016, le Cameroun a
fièrement constitué une équipe
nationale de Scrabble, symbole
de discipline, d'excellence et de
passion.
</p>
      </div>
      <div className='flex'>
        <Button className='text-white px-7 rounded-2xl py-6 bg-red-600 text-xl'>En Savoir plus</Button>
      </div>
        </section>
        </section>
        <div className="relative mb-12 mx-24 max-sm:hidden mt-12 h-[300px] flex-2">
          <img
            src={slide12Origine}
            alt="Partie de Scrabble en cours"
            className="rounded-lg object-cover  w-full h-full"
          />
        
        </div>
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
   
  )
}
