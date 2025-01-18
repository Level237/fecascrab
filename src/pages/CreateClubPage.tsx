
import HeaderSection from '../components/headerSection'
import slide from "../assets/team_word_text_wrote_with_wooden_letters_isolated_wooden_office.jpg"
import NavMobile from '../components/NavMobile'
import slide12Origine from "../assets/slide12.jpg"
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import { Separator } from '../components/ui/separator'
import ClubForm from '../components/forms/ClubForm'
import CtaInscription from '../components/Cta-inscription'
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
       
        <CtaInscription/>
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
   
  )
}
