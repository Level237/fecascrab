import InscriptionForm from '../components/forms/InscriptionForm'
import logo from "../assets/logo.png"
import bgHome from "../assets/BG_Site.jpg"
import logoOff from "../assets/logo-officiel.png"
import { Skeleton } from '../components/ui/skeleton'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import '../components/forms/inscription.css'
import Loader from '../components/ui/loader'
export default function Inscription() {

  const [imageLoad,setImageLoad]=useState(false)

  const handleImageLoaded=()=>{
    setImageLoad(true)
    console.log('true')
  }
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
      <title>FecaScrab - Inscription</title>
      <link rel="icon" type="image/svg+xml" href={logo} />
      <meta name='description' content='Féderation Camerounaise de Scrabble'/>
      <meta name='keywords' content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
      <meta property="og:title" content="FecaScrab - Féderation Camerounaise de Scrabble" />
      <meta property="og:url" content="fecascrab.com/inscription" />
      <meta property="og:image" content={logoOff} />
    </Helmet>

    {!loading &&     <section>
          <section className='flex flex-col gap-20 '>
      <div className='bg-sky-400 w-full h-44 flex justify-center items-center relative'>
                <div className='absolute bottom-[-80px] z-50'>
                 
                 
                    <img className='w-48 h-48 rounded-xl' src={logoOff} alt="logo fecascrab" onLoad={handleImageLoaded} />
                </div>
                <div className='absolute bottom-[-80px] z-50'>
                {!imageLoad &&  <Skeleton className='w-48 h-48 bg-slate-50' />}
                </div>
      </div>

    <section className='flex flex-col items-center justify-center'>
            <div>
                <h2 className='font-bold title-font text-center text-5xl max-sm:text-xl'>FICHE D’INSCRIPTION AUX SUPER MASTERS <br /> DE SCRABBLE 2025</h2>
            </div>
            <div className='mt-7'>
                <h2 className='font-bold title-font text-center text-3xl max-sm:text-md'>DATES: DU 12 au 16 mars 2025 <span className='text-sky-400 text-4xl'>&#x2022;</span> EDITIONS:DUPLICATE ET CLASSIQUE <br />LIEU:DOUALA-CAMEROUN</h2>
            </div>

    </section>

    <section className='mx-36 max-sm:mx-5'>
        <InscriptionForm/>
    </section>
    
    </section>
    <section className='w-full h-48' style={{ background:`url(${bgHome})`,backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} >

</section>
<div className='w-full   flex justify-center items-center h-16 relative bg-[#107a5f]'>
        <img className='w-20 absolute top-[-30px]' src={logo} alt="" />
      </div>
    </section>}

    {loading && <Loader/>}

    </>

    
  )
}
