import { HeroSection } from '../components/HeroSection'
import HeaderSection from '../components/headerSection'
import slide from "../assets/slide2.jpg"
import NavMobile from '../components/NavMobile'

export default function OriginePage() {
  return (
    <section>
        <HeaderSection />
        <NavMobile/>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
        <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 bg-red-600'>
            <h2 className='text-2xl text-white font-bold '>Les Origines</h2>
        </div>
    </div>

    <section className='mx-32 mt-24 max-sm:mx-4'>
                <p className='text-xl max-sm:text-lg'>La Fédération camerounaise de Scrabble (FECASCRAB) est l'organe officiel qui
        régit la pratique du Scrabble au Cameroun. Créée en 1990, la FECASCRAB s’est
        donnée pour mission de promouvoir ce jeu intellectuel dans tout le pays, en offrant
        un cadre structuré pour les compétitions, les formations et les échanges entre
        passionnés.

        </p>
        <p className='text-xl max-sm:text-lg'>La Fédération camerounaise de Scrabble (FECASCRAB) est l'organe officiel qui
        régit la pratique du Scrabble au Cameroun. Créée en 1990, la FECASCRAB s’est
        donnée pour mission de promouvoir ce jeu intellectuel dans tout le pays, en offrant
        un cadre structuré pour les compétitions, les formations et les échanges entre
        passionnés.

        </p>
    </section>
    </section>
  )
}
