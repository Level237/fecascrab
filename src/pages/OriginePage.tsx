import { HeroSection } from '../components/HeroSection'
import HeaderSection from '../components/headerSection'
import slide from "../assets/slide2.jpg"

export default function OriginePage() {
  return (
    <section>
        <HeaderSection />
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-0 h-96 mx-24  bg-[#02abee]'>
        <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 bg-red-600'>
            <h2 className='text-2xl text-white font-bold '>Les Origines</h2>
        </div>
    </div>

    <section className='mx-32 mt-24'>
                <p className='text-xl'>La Fédération camerounaise de Scrabble (FECASCRAB) est l'organe officiel qui
        régit la pratique du Scrabble au Cameroun. Créée en 1990, la FECASCRAB s’est
        donnée pour mission de promouvoir ce jeu intellectuel dans tout le pays, en offrant
        un cadre structuré pour les compétitions, les formations et les échanges entre
        passionnés.

        </p>
        <p className='text-xl'>La Fédération camerounaise de Scrabble (FECASCRAB) est l'organe officiel qui
        régit la pratique du Scrabble au Cameroun. Créée en 1990, la FECASCRAB s’est
        donnée pour mission de promouvoir ce jeu intellectuel dans tout le pays, en offrant
        un cadre structuré pour les compétitions, les formations et les échanges entre
        passionnés.

        </p>
    </section>
    </section>
  )
}
