
import slide from "../assets/slide2.jpg"
export function HeroSection() {
    return (
      <section className="relative">
        {/* Background Image */}
        <div 
          className="w-full h-[500px] relative"
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Red Box with Title */}
          <div className="absolute bottom-0 left-0 bg-red-600 p-6 md:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              LES ORIGINES
            </h2>
          </div>
        </div>
  
        {/* Text Content */}
        <div className="container mx-auto px-4 py-12">
          <p className="text-gray-800 text-lg leading-relaxed max-w-4xl">
            La Fédération camerounaise de Scrabble (FECASCRAB) est l&apos;organe officiel qui régit la pratique du Scrabble au Cameroun. Créée en 1990, la FECASCRAB s&apos;est donnée pour mission de promouvoir ce jeu intellectuel dans tout le pays en offrant aux passionnés un cadre idéal d&apos;épanouissement.
          </p>
        </div>
      </section>
    )
  }
  
  