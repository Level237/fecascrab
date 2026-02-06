import InscriptionForm from '../components/forms/InscriptionForm'
import logoOff from "../assets/responsive_MasterScrabble.jpg"
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import logoIcon from "../assets/logo.png"
import slider from "../assets/SliderWeb.jpeg"
import NavMobile from '../components/NavMobile'
import HeaderSection from '../components/headerSection'
import '../components/forms/inscription.css'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import { ScrollRestoration } from 'react-router-dom'
export default function Inscription() {




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
        <link rel="icon" type="image/svg+xml" href={logoIcon} />
        <meta name='description' content='Féderation Camerounaise de Scrabble' />
        <meta name='keywords' content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
        <meta property="og:title" content="FecaScrab - Féderation Camerounaise de Scrabble" />
        <meta property="og:url" content="fecascrab.com/inscription" />
        <meta property="og:image" content={logoOff} />
      </Helmet>

      {!loading && <section>
        <ScrollRestoration />
        <HeaderSection />
        <NavMobile />
        <section className='flex flex-col gap-20 '>
          <div style={{ background: `url(${slider})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='bg-red-600 relative mt-12 w-full h-[350px] flex justify-center items-center relative'>
            <div className='absolute bg-green-600 w-full h-full opacity-50'>

            </div>


          </div>

          <section className='flex flex-col items-center justify-center'>
            <div>
              <h2 className='font-bold title-font text-center text-5xl max-sm:text-2xl'>FICHE D’INSCRIPTION AUX SUPER MASTERS <br /> DE SCRABBLE 2026</h2>
            </div>
            <div className='mt-7'>
              <h2 className='font-bold title-font text-center max-sm:text-xl text-3xl max-sm:text-md'>DATES: Du 11 au 15 mars 2026 <span className='text-sky-400 text-4xl max-sm:text-2xl'>&#x2022;</span> EDITIONS:DUPLICATE ET CLASSIQUE <br /> LIEU:DOUALA-CAMEROUN</h2>
            </div>

          </section>

          <section className='mx-36 max-sm:mx-5'>
            <InscriptionForm />
          </section>

        </section>


        <Footer />
      </section>}

      {loading && <Loader />}

    </>


  )
}