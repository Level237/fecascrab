
import HeaderSection from '../../components/headerSection'
import slide from "../../assets/Slide01.jpg"
import slideResponsive from "../../assets/responsive_MasterScrabble.jpg"
import NavMobile from '../../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../../components/ui/loader'
import Footer from '../../components/Footer'
import { Separator } from '../../components/ui/separator'
import PhotoGallery from '../../components/photos-galeries'
import CtaInscription from '../../components/Cta-inscription'
export default function MasterEvent() {


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
        <div className='mt-12 title-second flex flex-col items-center gap-4 justify-center max-sm:mx-4'>
                <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>Super Masters 2025 <br />

Une Expérience Unique au Cameroun</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'> <span className='font-bold'>Dates :</span>Du 12 au 16 mars 2025 |  <span className='font-bold'> <br className='max-sm:block hidden' /> Lieu : </span>Bona’anja Siga Bonjo, Littoral </p>
                </div>
            </div>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} 
    className=' max-sm:hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
    </div>
    <div style={{ background:`url(${slideResponsive})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} 
    className=' max-sm:flex hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
    </div>

    <section>
    <div className='flex mx-24 title-second mt-12 max-sm:-mt-[50px] flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Un cadre exceptionnel <br />

                pour une compétition internationale</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>Les Super Masters 2025 vous emmènent dans le charmant village de Bona’anja Siga Bonjo,
niché dans la région du Littoral, à quelques kilomètres de Souza. Accessible par bateau ou
par route, ce lieu pittoresque offre une immersion totale dans la culture et la beauté
naturelle du Cameroun.

</p>
<p className='text-2xl max-sm:text-lg mt-6'>Ce rendez-vous de prestige est renforcé par la présence annoncée du Ministre des Sports,
qui souligne l’importance de cet événement dans le paysage sportif international.</p>
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>
            <div className='flex mx-24 mt-12 title-second  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Une gastronomie riche et variée</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>La cuisine sera à l’honneur avec des <span className='font-bold'> buffets généreux</span>  pour chaque repas :
</p>
            <div className='mt-6 mx-4'>
                
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Petit-déjeuner : </span> Une variété de mets locaux et internationaux pour bien démarrer la
                    journée</li>
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Déjeuner : </span> Des plats traditionnels et contemporains mettant en valeur les saveurs du
                    Cameroun</li>
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Barbecue sous les étoiles : </span> Une expérience conviviale et authentique pour conclure les
journées en beauté.

</li>
            </div> 
            <p className='text-2xl max-sm:text-lg mt-6'>Les participants auront également l’occasion de déguster <span className='font-bold'>les spécialités culinaires
            camerounaises</span> , préparées par des chefs locaux.</p>
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>

            <div className='flex mx-24 mt-12  flex-col title-second items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Un événement de prestige</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>Les Super Masters 2025, c’est :
</p>
            <div className='mt-6 mx-4'>
                
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'>Une compétition rassemblant les meilleurs joueurs du monde entier</li>
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'>Une expérience unique dans un cadre enchanteur</li>
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'>Une célébration du Scrabble, de la culture camerounaise et de la convivialité.



</li>
            </div> 
            <p className='text-2xl max-sm:text-lg mt-6'>Les participants auront également l’occasion de déguster <span className='font-bold'>les spécialités culinaires
            camerounaises</span> , préparées par des chefs locaux.</p>
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>
            <div className='flex mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>galerie photos</h2>
                <PhotoGallery/>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>
    </section>
    <CtaInscription/>
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
   
  )
}
