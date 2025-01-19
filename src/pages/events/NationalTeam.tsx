
import HeaderSection from '../../components/headerSection'
import slide from "../../assets/CHAMPAS 2019.jpg"
import img1 from "../../assets/slide4Origine.jpg"
import img2 from "../../assets/slide3origine.jpg"
import img3 from "../../assets/slide8Origine.jpg"
import img4 from "../../assets/slide2Origine.jpg"
import img5 from "../../assets/slide10.jpg"
import NavMobile from '../../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../../components/ui/loader'
import Footer from '../../components/Footer'
import { Separator } from '../../components/ui/separator'
import CtaScolaire from '../../components/Cta-scolaire'
import CtaTeam from '../../components/Cta-team'
export default function NationalTeam() {


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
                <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>Sélection Nationale 
                <br />

                de Scrabble du Cameroun</h2>

            </div>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} 
    className=' max-sm:hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
    </div>
    <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' max-sm:flex hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
    </div>

    <section>
    <div className='flex title-second mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
    <h2 className='font-bold text-2xl italic text-red-500 max-sm:text-xl'>La Fierté du Scrabble Camerounais
    </h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>Depuis 2016, le Cameroun a fièrement constitué une équipe nationale de Scrabble, symbole
de discipline, d'excellence et de passion. Les représentants de notre pays sont sélectionnés
parmi les meilleurs joueurs, reflétant l'engagement et les performances exceptionnelles
observés lors des compétitions nationales. Ces athlètes portent haut les couleurs du
Cameroun sur la scène internationale.

</p>
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>
            <div className='flex title-second mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Processus de Sélection</h2>
                <div>
                    <p className='text-2xl max-sm:text-lg'>La constitution de l équipe nationale repose sur un processus rigoureux :
</p>
            <div className='mt-6 mx-4'>
                
            <div className='flex flex-col justify-center gap-2'>
                           
                            <div className=''><p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>1.Tournois Qualificatifs :</span>Chaque année, des compétitions nationales permettent d’évaluer
                            les meilleurs joueurs</p></div>
                            <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>2.Critères de Sélection : </span>Les six premiers au classement général des tournois qualificatifs
                            sont sélectionnés pour représenter le Cameroun</p></div>
                            <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>3.Reconnaissance Officielle :</span>Les joueurs sélectionnés sont reconnus comme des athlètes
camerounais par le ministère des Sports et la FECASCRAB.

</p></div>
                        </div>
                        
            </div> 
            <p className='text-2xl mt-8 max-sm:text-lg'>Ce système garantit que l'équipe nationale est composée des joueurs les plus compétitifs,
                        capables de rivaliser avec les meilleurs du monde.
</p>
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>

            <div className='flex title-second mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Les Valeurs de l’Équipe Nationale</h2>
                <div>
                    
<div className='mt-6 mx-4'>
                
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Excellence :</span> Chaque joueur s'engage à donner le meilleur de lui-même, dans le respect
                des règles et de l’adversaire</li>
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Esprit d’équipe : </span> Au-delà des performances individuelles, la cohésion et le soutien
                mutuel restent au cœur de l’équipe.
                </li>
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'>Rayonnement : </span>Les joueurs sont des ambassadeurs du Scrabble camerounais et
                contribuent à faire connaître le pays sur la scène mondiale.</li>
        </div> 
           
                </div>

                <Separator className='bg-[#00723e] mt-7'/>
            </div>
            <div className='flex title-second mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Vision et Objectifs</h2>
                <p className='text-2xl max-sm:text-lg'>L équipe nationale vise
                à :
                </p>
                <div className='mt-6 mx-4'>
                
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'>Promouvoir le Scrabble comme un sport intellectuel au Cameroun</span></li>
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Encourager les jeunes à intégrer les clubs et participer aux compétitions nationales </span>
                </li>
                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'>Obtenir des titres prestigieux sur la scène internationale.</span></li>
        </div>
               
                <Separator className='bg-[#00723e] mt-7'/>
            </div>
            <div className='flex title-second mx-24 mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Le Programme du Championnat Scolaire</h2>
                <p className='text-2xl max-sm:text-lg'>Le championnat scolaire se déroule en plusieurs étapes :
                </p>

                <div className='flex flex-col mt-6 mx-4'>
                        <div className='flex flex-col justify-center gap-2'>
                            
                            <div className='flex gap-2'><p className='text-2xl max-sm:text-lg'> <span className='font-bold text-2xl max-sm:text-lg'>1.Phase d'élimination régionale :</span> Sélections dans chaque établissement partenaire pour
                            identifier les meilleurs talents</p></div>
                            <div className='flex gap-2'> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>2.Phase nationale :</span>Compétition regroupant les jeunes champions régionaux pour une
                            grande finale nationale</p></div>
                            <div className='flex gap-2'> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>3.Finale lors des Super Masters :</span>La phase ultime se tiendra en mars, avec des prix et
                            distinctions pour les jeunes talents.</p></div>
                        </div>

                        <div className='flex flex-col max-sm:mx-0  gap-2 mx-12 mt-12'>
                                <div className='grid max-sm:grid-cols-1 grid-cols-3 gap-2'>
                                        <div>
                                        <img
                                        src={img1}
                                        alt={`national team cameroon`}
                                        className="object-cover h-full rounded-lg"
                                        />
                                        </div>
                                        <div>
                                        <img
                                        src={img2}
                                        alt={`national team cameroon`}
                                        className="object-cover h-full rounded-lg"
                                        />
                                        </div>
                                        <div>
                                        <img
                                        src={img3}
                                        alt={`national team cameroon`}
                                        className="object-cover h-full rounded-lg"
                                        />
                                        </div>
                                </div>
                                <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-2'>
                                        <div>
                                        <img
                                        src={img4}
                                        alt={`national team cameroon`}
                                        className="object-cover h-full rounded-lg"
                                        />
                                        </div>
                                        <div>
                                        <img
                                        src={img5}
                                        alt={`national team cameroon`}
                                        className="object-cover h-full rounded-lg"
                                        />
                                        </div>
                                        
                                </div>
                        </div>
                        
                </div>
               
                
            </div>
    </section>
    <CtaTeam/>
    <Footer/>
    </section>
    }

    {loading && <Loader/>}
    </>
   
  )
}
