import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'
import "../components/forms/inscription.css"
import { Skeleton } from '../components/ui/skeleton';
import section1 from "../assets/section1.jpg"
import section2 from "../assets/event.jpg"
import bgHome from "../assets/BG_Site.jpg"
import logo from "../assets/logo-1.png"
import logoIcon from "../assets/logo.png"
import logoScrab from "../assets/logo_fecascrab.png"
import {Helmet} from "react-helmet-async"
import Header from '../components/Header';
import Hero from '../components/Hero';
import Figures from '../components/Figures';
export default function Homepage() {

  const [startDate]=useState(Date.now())
  const [loading,setLoading]=useState(false)
  const [endDate]=useState('2025-03-12T10:00')
  const [timeRemaining, setTimeRemaining] = useState<{jours:number,heures:number,minutes:number,secondes:number}>( { jours: 0, heures: 0, minutes: 0, secondes: 0 });
  const calculerTempsRestant = (d2:any) => {
    const now:any = new Date();
    const d2Date:any = new Date(d2);
    const diff = d2Date - now;

    if (diff < 0) {
        return { jours: 0, heures: 0, minutes: 0, secondes: 0 };
    }

    const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
    const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((diff % (1000 * 60)) / 1000);

    return { jours, heures, minutes, secondes };
};

useEffect(() => {
  const interval = setInterval(() => {
      setTimeRemaining(calculerTempsRestant(endDate));
      setLoading(true)
  }, 1000);

  return () => clearInterval(interval);
}, [startDate, endDate]);


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
    <section>
      <Header/>
      <Hero/>
      <div className="max-w-7xl mx-28 px-4 py-12">
      {/* Welcome Section */}
      <div className="flex items-center justify-between gap-8 mb-12">
        <div className="space-y-6 flex-1">
          <h1 className="text-red-600 font-bold text-3xl md:text-3xl leading-tight">
            BIENVENUE SUR LE SITE OFFICIEL
            <br />
            DE LA FÉDÉRATION INTERNATIONALE
         
            DE SCRABBLE
          </h1>
          <p className="text-gray-700 text-2xl leading-relaxed">
            Depuis 1990, nous avons pour mission d&apos;organiser et de promouvoir le Scrabble dans tout le pays. Si vous êtes passionné par les mots, nous offrons des clubs, des formations et les échanges entre passionnés.
          </p>
        </div>
        <div className="relative h-[300px] flex-2">
          <img
            src={section1}
            alt="Partie de Scrabble en cours"
            className="rounded-lg object-cover w-full h-full"
          />
        
        </div>
      </div>

      {/* News Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-red-600">À LA UNE</h2>
        
          
           
            <div className="relative h-[200px] md:h-[300px]">
              <img
                src={section2}
                alt="Super Master 2024"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>

            <div>
              <h2 className='text-3xl text-[#00723e] font-bold'>SUPER MASTER 2025: UNE EXPERIENCE 
              UNIQUE AU CAMEROUN</h2>
              <p className='text-2xl mt-5'>Rejoignez-nous pour vivre un moment d'exception, où compétition
              rime avec excellence et découverte !</p>
              <div className='mt-3 flex items-center justify-center'>
            <Button className='bg-red-600 text-white px-8 py-6 text-lg title-bold'>Découvrir</Button>
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
            <Button className='bg-red-600 mt-8 text-white px-8 py-6 text-lg title-bold'>Voir tout les palmares</Button>
          </section>
    </section>
    </>
  )
}
