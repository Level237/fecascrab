import { HeroSection } from '../components/HeroSection'
import HeaderSection from '../components/headerSection'
import slide from "../assets/organisation.jpg"
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
export default function OrganisationPage() {
  return (
    <section>
        <HeaderSection />
        <NavMobile/>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
        <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 max-sm:left-12 bg-red-600'>
            <h2 className='text-2xl text-white font-bold '>Organisation</h2>
        </div>
    </div>

    <section className='mx-32 mt-24 max-sm:mx-4'>
                <p className='text-xl max-sm:text-lg'>L'organisation de la Fédération camerounaise de Scrabble (FECASCRAB) repose
sur une structure dynamique et bien définie, composée de membres dévoués à la
promotion et au développement du Scrabble au Cameroun. Voici l’organigramme
actuel :

        </p>
        <h2 className="text-2xl mt-7 max-sm:text-xl  font-bold text-red-600">BUREAU EXECUTIF</h2>


        <div className='mx-4 max-sm:mx-6 mt-8'>
        <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Président : Amédée Assomo: </span>Leader visionnaire, il pilote les initiatives stratégiques de la Fédération et veille à
                     son rayonnement national et international
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Vice-Président : Poste vacant : </span>Ce rôle est en attente de nomination pour renforcer davantage l’exécutif fédéral.
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Secrétaire Général (SG) : Joseph Mitende: </span>Chargé de la coordination administrative, il assure le suivi des activités de la
                     Fédération et la communication interne.
            </li>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                     <span className='font-bold'>Chef du Département Financier (CDF) : Francis Martial Bidole: </span>Garant de la gestion financière et des ressources de la Fédération, il veille à la
transparence et à l’efficacité dans l’utilisation des fonds.
            </li>
        </div>

        <div>
        <h2 className="text-2xl mt-7 max-sm:text-xl  font-bold text-red-600">ORGANISATION TECHNIQUE</h2>
        <p className='text-xl mt-6 max-sm:text-lg'>La section technique de la FECASCRAB est dédiée à l’encadrement et à la
formation des joueurs, avec un accent particulier sur la performance et l’innovation
dans les compétitions

        </p>
        <div className='mt-5'>
            <li className="text-xl max-sm:text-lg mb-4 text-justify">
                        <span className='font-bold'>Directeur Technique National (DTN) : Gislain Yamga</span>Responsable des orientations techniques et des programmes de formation, il
                        coordonne l’ensemble des activités sportives et compétitives.
                </li>
                <li className="text-xl max-sm:text-lg mb-4 text-justify">
                        <span className='font-bold'>Coach : Paco Bahanag :</span>Entraîneur principal, il accompagne les joueurs de l’équipe nationale et des
clubs affiliés dans leur préparation aux compétitions locales et internationales.

                </li>
        </div>
        </div>


            <div>
            <p className='text-xl max-sm:text-lg'>Cette organisation repose sur une collaboration étroite entre le bureau exécutif et
l’équipe technique, garantissant le succès des initiatives fédérales et l’excellence du
Scrabble camerounais.
        </p>
        <p className='text-xl max-sm:text-lg'>Cette structure pourra évoluer avec de nouvelles nominations et l’expansion des
activités de la Fédération.
        </p>
            </div>
          
           
            <div className="relative mb-12 max-sm:hidden mt-12 h-[300px] flex-2">
          <img
            src={slide12Origine}
            alt="Partie de Scrabble en cours"
            className="rounded-lg object-cover  w-full h-full"
          />
        
        </div>
           
    </section>
    </section>
  )
}
