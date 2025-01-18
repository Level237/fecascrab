
import HeaderSection from '../../components/headerSection'
import slide from "../../assets/Slide02.jpg"
import slideResponsive from "../../assets/responsive_ScrabbleJunior.jpg"
import NavMobile from '../../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../../components/ui/loader'
import Footer from '../../components/Footer'
import { Separator } from '../../components/ui/separator'
import PhotoGallery from '../../components/photos-galeries'
import CtaInscription from '../../components/Cta-inscription'
export default function ScrabbleJunior() {


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
        <div className='mt-12 flex flex-col items-center gap-4 justify-center max-sm:mx-4'>
                <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>Le Scrabble Scolaire
                <br />

                Une Formation pour l’Avenir</h2>

            </div>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} 
    className=' max-sm:hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
    </div>
    <div style={{ background:`url(${slideResponsive})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} 
    className=' max-sm:flex hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
    </div>

    <section>
    <div className='flex mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                
                <div>
                    <p className='text-2xl max-sm:text-lg'>Le Scrabble scolaire au Cameroun est bien plus qu’un simple jeu. Il est un puissant outil
éducatif qui développe les compétences linguistiques, mathématiques, stratégiques et
sociales des jeunes. La Fédération Camerounaise de Scrabble (FECASCRAB) s’engage à
promouvoir le Scrabble dans les établissements scolaires pour former une génération de
champions et de penseurs critiques.

</p>
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>
            <div className='flex mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>L'importance du Scrabble Junior</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>Le Scrabble Junior :
</p>
            <div className='mt-6 mx-4'>
                
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Améliore les compétences linguistiques : </span> enrichissement du vocabulaire, amélioration
                    de l’orthographe et maîtrise des règles grammaticales.</li>
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Développe les capacités stratégiques et logiques : </span> réflexion, gestion du temps et prise
                    de décision.</li>
                    <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Renforce les valeurs humaines : </span> Unfair-play, discipline, concentration et esprit d'équipe

</li>
<li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Prépare les jeunes aux compétitions internationales : </span> en intégrant des clubs et en
participant à des tournois.
</li>
            </div> 
           
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>

            <div className='flex mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Notre vision</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>La FECASCRAB souhaite :
</p>
<div className='mt-6 mx-4'>
                
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Étendre le Scrabble dans plus d’écoles et lycées </span> pour atteindre toutes les régions du
                Cameroun</li>
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Identifier et former les talents prometteurs </span> dès leur plus jeune âge
                </li>
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Créer un réseau national solide </span>pour les compétitions scolaires</li>
<li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Faire du Cameroun un vivier de champions internationaux </span> dans la catégorie junior.
</li>
        </div> 
           
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
