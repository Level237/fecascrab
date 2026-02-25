
import logoOff from "../assets/responsive_MasterScrabble.jpg"
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import logoIcon from "../assets/logo.png"
import slider from "../assets/sliderWomen.jpg"
import NavMobile from '../components/NavMobile'
import HeaderSection from '../components/headerSection'
import '../components/forms/inscription.css'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import { ScrollRestoration } from 'react-router-dom'
import InscriptionFormFeminine from "../components/forms/InscriptionFormFemine"

export default function InscriptionFeminine() {




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
                <title>FecaScrab - Tournoi Féminin de Scrabble 2026</title>
                <link rel="icon" type="image/svg+xml" href={logoIcon} />
                <meta name='description' content='Féderation Camerounaise de Scrabble' />
                <meta name='keywords' content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
                <meta property="og:title" content="FecaScrab - Féderation Camerounaise de Scrabble" />
                <meta property="og:url" content="fecascrab.com/inscription-tournoi-feminin-2026" />
                <meta property="og:image" content={logoOff} />
            </Helmet>

            {!loading && <section>
                <ScrollRestoration />
                <HeaderSection />
                <NavMobile />
                <section className='flex flex-col gap-20 '>
                    <div style={{ background: `url(${slider})`, backgroundPosition: "center", backgroundSize: "cover" }} className='bg-red-600 relative mt-12 w-full h-[350px] flex justify-center items-center relative'>



                    </div>

                    <section className='flex flex-col items-center justify-center'>
                        <div>
                            <h2 className='font-bold title-font text-center text-5xl max-sm:text-2xl'>INSCRIPTION - TOURNOI FEMININ DE SCRABBLE | 07 Mars</h2>
                        </div>


                    </section>

                    <section className='mx-36 max-sm:mx-5'>
                        <InscriptionFormFeminine />
                    </section>

                </section>


                <Footer />
            </section>}

            {loading && <Loader />}

        </>


    )
}