import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'
import { useEffect, useState } from 'react'
import "../components/forms/inscription.css"
import { Skeleton } from '../components/ui/skeleton';
import bgHome from "../assets/BG_Site.jpg"
import logo from "../assets/logo-1.png"
import logoIcon from "../assets/logo.png"
import logoScrab from "../assets/logo_fecascrab.png"
import {Helmet} from "react-helmet-async"
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
    <section style={{ background:`url(${bgHome})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className='w-full bg-[#02abee] rounded-md relative h-[100%] justify-start pt-20 flex flex-col items-center'>
      <div>
        <h2 className='font-bold title-bold max-sm:text-center'>LA FEDERATION CAMEROUNAISE DE SCRABBLE ORGANISE LES</h2>
      </div>
      <div>
        <img src={logoScrab} alt="" className='w-[27rem] h-[28rem] mt-[-4rem]' />
      </div>
      {!loading && <div className='grid max-sm:mx-6  mt-[-5rem] gap-4 grid-cols-4'>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
      </div>
      <div>
          <h2 className='text-md title-bold font-bold text-white'>JOURS</h2>
        </div>
      </div>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200  max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
      </div>
      <div>
          <h2 className='text-md title-bold font-bold text-white'>Heures</h2>
        </div>
      </div>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
      </div>
      <div>
          <h2 className='text-md title-bold  text-white'>Minutes</h2>
        </div>
      </div>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 max-sm:px-4 max-sm:py-6 rounded-xl w-4 px-5 py-8" />
        
      </div>
      <div>
          <h2 className='text-md title-bold text-white'>Secondes</h2>
        </div>
      </div>
        </div>}
        {loading && <div className='flex items-center gap-4 max-sm:gap-0 max-sm:mx-6 max-sm:grid max-sm:grid-cols-4  mt-[-5rem] '>
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
                
                      {timeRemaining.jours && timeRemaining.jours.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>{el}</h2></div>)}

                <div className='ml-4 max-sm:ml-0'>
                  <h2 className='text-white font-bold text-2xl max-sm:text-xl'>:</h2>
                </div>
        </div>
        <div>
          <h2 className='text-md title-bold max-sm:text-sm font-bold text-white'>JOURS</h2>
        </div>
        </div>
       
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 max-sm:ml-7 items-center flex-row'>
        {timeRemaining.heures?.toString().length==1  && timeRemaining.heures==0  && timeRemaining.heures?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>0</h2></div>}
        {timeRemaining.heures!==0  && timeRemaining.heures?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>0</h2></div>}
                      {timeRemaining.heures?.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>{el}</h2></div>)}
             
              
                <div className='ml-4 max-sm:ml-1'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
        </div>
        <div>
          <h2 className='text-md title-bold max-sm:text-sm font-bold text-white'>HEURES</h2>
        </div>
        </div>
        <div className='flex gap-3 max-sm:ml-7 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
        {timeRemaining.minutes?.toString().length==1  && timeRemaining.minutes==0  && timeRemaining.minutes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>0</h2></div>}
        {timeRemaining.minutes!==0  && timeRemaining.minutes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>0</h2></div>}
              {timeRemaining.minutes?.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>{el}</h2></div>)}
              
                <div className='ml-1 max-sm:ml-1'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
        </div>
        <div>
          <h2 className='text-md title-bold max-sm:text-sm font-bold text-white'>MINUTES</h2>
        </div>
        </div>
        <div className='flex gap-3 justify-center max-sm:ml-5 flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
          {timeRemaining.secondes?.toString().length==1  && timeRemaining.secondes==0  && timeRemaining.secondes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>0</h2></div>}
          {timeRemaining.secondes!==0  && timeRemaining.secondes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>0</h2></div>}
        {timeRemaining.secondes?.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3 max-sm:px-2.5 max-sm:py-2'><h2 className='text-5xl max-sm:text-xl font-bold'>{el}</h2></div>)}
        </div>
        <div>
          <h2  className='text-md title-bold max-sm:text-sm font-bold text-white'>SECONDES</h2>
        </div>
        </div>
      </div>}
      
      <div className='mt-8 mb-24'>
        <Link to="/inscription"><Button className='bg-red-700 title-bold px-16 text-sm py-6 text-white'>S'INSCRIRE</Button></Link>
          
      </div>
      <div className='w-full   flex justify-center items-center h-32 relative bg-[#107a5f]'>
        <img className='w-96 max-sm:w-80 ' src={logo} alt="" />
      </div>
    </section>
    </>
  )
}
