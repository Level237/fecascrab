
import HeaderSection from '../components/headerSection'
import slide from "../assets/team_word_text_wrote_with_wooden_letters_isolated_wooden_office.jpg"
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
import { Separator } from '../components/ui/separator'
import ClubForm from '../components/forms/ClubForm'
export default function CreateClubPage() {


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
        <div style={{ background:`url(${slide})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
        
    </div>

        <section className='flex mt-16 flex-col justify-center max-sm:mx-4 mx-24 gap-6'>
        <div>
                <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>FORMULAIRE DE DEMANDE DE CREATION<br /> D'UN CLUB DE SCRABBLE SCOLAIRE</h2>
            </div>
            <div>
                <Separator className='bg-[#00723e]'/>
            </div>
            <div>
        <p className='text-2xl max-sm:text-lg'>Merci de votre intérêt pour la promotion du Scrabble dans votre établissement. Veuillez
        remplir ce formulaire avec les informations nécessaires afin<br className='max-sm:hidden' />
        avec excellence et découverte !</p>
      </div>
        <ClubForm/>
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
