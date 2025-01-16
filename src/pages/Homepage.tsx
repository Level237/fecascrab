import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'
import "../components/forms/inscription.css"
import section1 from "../assets/section1.jpg"
import section2 from "../assets/event.jpg"
import bgHome from "../assets/BG_Site.jpg"
import logo from "../assets/logo-1.png"
import logoIcon from "../assets/logo.png"
import {Helmet} from "react-helmet-async"
import Header from '../components/Header';
import Hero from '../components/Hero';
import Figures from '../components/Figures';
import selection from "../assets/section2.jpg"
import NavMobile from '../components/NavMobile';
import Loader from '../components/ui/loader';
import Footer from '../components/Footer';
import { InstagramEmbed } from 'react-social-media-embed';
import { HeroCarousel } from '../components/heroCarousel';
export default function Homepage() {


  
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
    <Helmet>
      <title>FecaScrab - Féderation Camerounaise de Scrabble</title>
      <link rel="icon" type="image/svg+xml" href={logoIcon} />
      <meta name="robots" content="index, follow" />
      <link rel='canonical' href={ window.location.href } />
      <meta name='description' content='Féderation Camerounaise de Scrabble'/>
      <meta name='keywords' content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FecaScrab - Féderation Camerounaise de Scrabble" />
      <meta property="og:url" content="fecascrab.com" />
      <meta property="og:image" content={logo} />
      <meta property="og:image:secure_url" content={bgHome} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`Logo site`} />
            <meta name="twitter:creator" content="fecascrab" />
            <meta name="twitter:card" content="Féderation Camerounaise de Scrabble" />
            <meta name="twitter:title" content="Féderation Camerounaise de Scrabble" />
            <meta name="twitter:site" content="https://fecascrab.com" />
            <meta name="twitter:image" content={bgHome} />
            <meta name="twitter:description" content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
    </Helmet>
    {!loading && 
    <section> <section>
    <Header/>
    <NavMobile/>
    <HeroCarousel/>
    <div className="max-w-7xl mx-28 px-4 max-sm:mx-4 py-12">
    {/* Welcome Section */}
    <div className="flex items-center max-sm:flex-col justify-between gap-8 mb-12">
      <div className="space-y-6 flex-1">
        <h1 className="text-red-600 font-bold text-3xl max-sm:text-2xl md:text-3xl leading-tight">
          BIENVENUE SUR LE SITE OFFICIEL
          <br className='max-sm:hidden' />
          DE LA FÉDÉRATION INTERNATIONALE
       
          DE SCRABBLE
        </h1>
        <div className="relative lg:hidden h-[300px] flex-2">
        <img
          src={section1}
          alt="Partie de Scrabble en cours"
          className="rounded-lg  object-cover w-full h-full"
        />
      
      </div>
        <p className="text-gray-700 text-2xl max-sm:text-xl leading-relaxed">
          Depuis 1990, nous avons pour mission d&apos;organiser et de promouvoir le Scrabble dans tout le pays. Si vous êtes passionné par les mots, nous offrons des clubs, des formations et les échanges entre passionnés.
        </p>
      </div>
      <div className="relative max-sm:hidden h-[300px] flex-2">
        <img
          src={section1}
          alt="Partie de Scrabble en cours"
          className="rounded-lg object-cover  w-full h-full"
        />
      
      </div>
    </div>

    {/* News Section */}
    <div className="space-y-6">
      <h2 className="text-3xl  font-bold max-sm:text-2xl text-red-600">À LA UNE</h2>
      
        
         
          <div className="relative h-[200px] md:h-[300px]">
            <img
              src={section2}
              alt="Super Master 2024"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div>
            <h2 className='text-3xl text-[#00723e] max-sm:text-2xl font-bold'>SUPER MASTER 2025: UNE EXPERIENCE 
            UNIQUE AU CAMEROUN</h2>
            <p className='text-2xl max-sm:text-xl mt-5'>Rejoignez-nous pour vivre un moment d'exception, où compétition
            rime avec excellence et découverte !</p>
            <div className='mt-3 max-sm:mt-6 max-sm:justify-start flex items-center justify-center'>
          <Link to={"/inscription"}><Button className='bg-red-600 text-white px-8 py-6 text-lg title-bold'>Découvrir</Button></Link>
          
        </div>
          </div>
        </div>
       
  </div>
  <section className='w-full bg-[#00723e59] px-6 py-14 flex flex-col items-center'>
        <div>
            <h2 className='text-black text-3xl max-sm:text-2xl text-center font-bold'>La fédération Camerounaise de <br />
            Scrabble c’est au total...</h2>
          </div>
          <Figures/>
          <Link to={'/palmares'}><Button className='bg-red-600 mt-8 text-white px-8 py-6 text-lg title-bold'>Voir tout les palmares</Button></Link>
          
        </section>
        
        <section className='mt-24 mx-28 max-sm:mx-4 mb-8'>
        <div className="w-full h-[30rem] max-sm:h-[20rem] bg-black flex items-center justify-center">
        <InstagramEmbed url='https://www.instagram.com/reel/DExR_IQO6FQ/?igsh=OXR5aWp2aWp2aWFpenp2' width="100%" height="100%" />
    </div>

    <div className="relative mt-12 rounded-lg overflow-hidden">
      {/* Background Image */}
      <img
        src={selection}
        alt="Équipe nationale de Scrabble du Cameroun"
        className="w-full object-cover h-[30rem]"
      />
      
      {/* Overlay Content */}
     
    </div>
   
        </section>
        <div className=" flex flex-col items-center justify-center mt-[-7rem]  p-6">
          <div className=" bg-red-600 px-28 max-sm:px-6 py-9 z-50 ">
           <h2 className='text-2xl mb-6 md:text-3xl font-bold text-white  inline-block'>Sélection Nationale de Scrabble du Cameroun</h2>
           <p className='text-xl text-center'>Vous souhaitez en savoir plus sur comment intégrer l’équipe <br />

            nationale ou soutenir nos joueurs ?</p>
            
          </div>
          <div className='mt-[-1.5rem] z-[60] '>
            <Link to="/inscription"><Button className='bg-[#00723e]  text-white max-sm:py-8 px-8 py-6 text-lg'>Contactez Nous</Button></Link>
            
            </div>
        </div>
  </section>
 
    <Footer/>
    </section>
    
    }
   {loading && <Loader/>}
    </>
  )
}
