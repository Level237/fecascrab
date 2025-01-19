
import HeaderSection from '../components/headerSection'
import slide from "../assets/slideOrigine.jpeg"
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
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import CtaInscription from '../components/Cta-inscription'
export default function OriginePage() {


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
        <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 max-sm:left-12 bg-red-600'>
            <h2 className='text-4xl max-sm:text-3xl title-font text-white font-bold  '>Les Origines</h2>
        </div>
    </div>

    <section className='mx-32 mt-24 max-sm:mx-4'>
                <p className='text-xl title-second max-sm:text-lg'>La Fédération camerounaise de Scrabble (FECASCRAB) est l'organe officiel qui
        régit la pratique du Scrabble au Cameroun. Créée en 1990, la FECASCRAB s’est
        donnée pour mission de promouvoir ce jeu intellectuel dans tout le pays, en offrant
        un cadre structuré pour les compétitions, les formations et les échanges entre
        passionnés.

        </p>
        <h2 className='text-2xl title-bold mt-7 max-sm:text-2xl font-bold'>Date clés</h2>

        <div className='mx-4 title-second max-sm:mx-6 mt-8'>
        <li className="text-xl max-sm:text-lg title-second mb-4 text-justify">
                     <span className='font-bold title-bold'>Aout 1990 : </span>Déclaration de la FECASCRAB auprès de la Préfecture du
                     Département du Mfoundi (Région du Centre).
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold '>1991 : </span>Affiliation de la FECASCRAB à la Fédération Internationale de Scrabble
                     Francophone (FISF), positionnant le Cameroun sur la scène internationale.
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>1999 : </span>Première participation du Cameroun à un Championnat Mondial de
Scrabble (Bulle en Suisse), marquant une étape décisive dans l’évolution de la
discipline au niveau national.
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Mars 2017: </span>Affiliation de la FECASCRAB à la Confédération Africaine de Scrabble
                     Francophone (CASF), positionnant le Cameroun sur la scène internationale
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>5 Octobre 2017: </span>Agrément officiel, sous l’égide du ministère des Sports et de
l’Éducation physique, consacrant l’entrée de la FECASCRAB dans la grande
famille du mouvement sportif camerounais.
            </li>
        </div>
        <div className="relative h-[28rem] mt-12 mb-12">
              <img
                src={slide3Origine}
                alt="Super Master 2024"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>

            <div>
            <p className='text-xl title-second max-sm:text-lg'>Au fil des ans, la FECASCRAB a su diversifier ses activités en introduisant des
            formats variés comme le Scrabble Duplicate et Classique, tout en encourageant la
            participation des jeunes à travers les clubs scolaires.
        </p>
            </div>

            <h2 className="text-2xl title-bold mt-7 max-sm:text-xl  font-bold text-red-600">LES GRANDS MOMENTS DE L’HISTOIRE DU SCRABBLE AU CAMEROUN</h2>

            <div className='grid grid-cols-2  mt-12 mb-12 max-sm:grid-cols-1 gap-4'>
                    <div className='flex flex-col h-[100%] items-center gap-5'>
                         <div className='flex-1'>
                            <img className='rounded-2xl object-cover w-full h-[100%] ' src={slide4Origine} alt="" />
                         </div>
                         <div className='flex-1'>
                            <img className='rounded-2xl object-cover w-full h-[100%]' src={slide5Origine} alt="" />
                         </div>
                    </div>

                    <div>
                        <img className='rounded-2xl object-cover w-full h-[100%]  ' src={slide6Origine} alt="" />
                    </div>
            </div>
            <div>
            <p className='text-xl title-second max-sm:text-lg'>Ces moments forts témoignent de l’évolution et de l’influence grandissante de la
            FECASCRAB sur le développement du Scrabble en Afrique et dans le monde.


        </p>
        <h2 className="text-2xl mt-7 title-bold max-sm:text-xl  font-bold text-red-600">LES PERSONNALITES LES PLUS MARQUANTES DE LA FECASCRAB

</h2>
<p className='text-xl max-sm:text-lg title-second mt-8'>L’histoire de la FECASCRAB ne serait pas complète sans rendre hommage aux
femmes et hommes qui ont marqué son parcours.


        </p>

        <div className='mt-6 title-second mx-6'>
        <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Samuel Banyu: </span>Premier président de la FECASCRAB en 1991, visionnaire ayant
œuvré pour la structuration de la Fédération et son affiliation internationale.
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Nkouete Chewa King josaphat: </span>Triple champion D’Afrique duplicate.
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Amédée Assomo: </span>Président sortant, aujourd’hui président de la Fédération
Internationale de Scrabble Francophone (FISF), ayant largement contribué au
rayonnement du Scrabble africain.
            </li>
        </div>
            </div>
            <div className='title-second'>
            <p className='text-xl max-sm:text-lg mt-8'>Ces figures, parmi tant d'autres, incarnent les valeurs et la passion qui animent la
communauté scrabbleuse au Cameroun.
<div className='mt-8'>
            <h2 className="text-2xl mt-7 max-sm:text-xl  font-bold text-red-600 mb-4">LES GRANDS MOMENTS DU SCRABBLE CAMEROUNAIS
            </h2>
            </div>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Avril 2018: </span>premier sacre continental de l’équipe nationale lors des 3e
championnats d’afrique disputés à Bamako (Mali).

            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>MAi 2018: </span>Réception de l’équipe nationale par le ministre des sports suite au premier
                     sacre de l’équipe nationale à Bamako

            </li>
        </p>
        <div className="relative h-[28rem] mt-12 mb-12">
              <img
                src={slide2Origine}
                alt="Super Master 2024"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Novembre 2021: </span>Finale historique du championnat du monde classique opposant
les camerounais Amédée Assomo et Eric Salvador TCHOUYO.Celle-ci  verra le sacre TCHOUYO "Reebok"


            </li>

            <div className='flex max-sm:flex-col justify-center items-center gap-2'>
                          <div className='w-[25%] max-sm:w-[100%] h-96 '>
                            <img className='rounded-2xl max-sm:w-[100%] object-cover  h-[100%] ' src={slide7Origine} alt="" />
                         </div>
                         <div className='w-[50%] max-sm:w-[100%] h-96'>
                            <img className='rounded-2xl object-cover max-sm:w-[100%]  h-[100%] ' src={slide8Origine} alt="" />
                         </div>
                         <div className='w-[25%] max-sm:w-[100%] h-96'>
                            <img className='rounded-2xl object-cover max-sm:w-[100%] h-[100%] ' src={slide9Origine} alt="" />
                         </div>
            </div>
            <li className="text-xl mt-8 max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Mai 2021: </span>La razzia camerounaise aux championnats d’Afrique de scrabble à Dakar.
                     Nous repartons avec 4 médailles d’or dont le 3ème titre de champion d’Afrique

            </li>

            <div className='flex max-sm:flex-col justify-center items-center gap-2'>
                          <div className='w-[50%] max-sm:w-[100%] h-96 '>
                            <img className='rounded-2xl w-[100%] object-cover  h-[100%] ' src={slide10Origine} alt="" />
                         </div>
                         <div className='w-[50%] max-sm:w-[100%] h-96'>
                            <img className='rounded-2xl w-[100%] object-cover h-[100%] ' src={slide11Origine} alt="" />
                         </div>
            </div>
            <li className="text-xl mt-8 max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Mai 2022: </span>L’organisation avec Brio des 6ème championnats d’Afrique à Yaoundé

            </li>
            </div>
            
           
    </section>
    <CtaInscription/>
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
   
  )
}
