
import slider from "../assets/cta.jpg"
import { Button } from "./ui/button"
import sliderResponsive from "../assets/responsive_MasterScrabble.jpg"
import { Link } from "react-router-dom"
export default function CtaScolaire() {
  return (
    <section>
            <div style={{ background:`url(${slider})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}  
    className="relative px-24 flex items-center justify-center mb-12 mx-24 max-sm:hidden mt-12 h-[400px] flex-2">
         
        <div className="  flex flex-col gap-4 items-center">
            
                    <h2 className="text-white text-center text-6xl title-font max-sm:text-2xl font-bold">Participez à l'Aventure</h2>
            <p className='text-2xl max-sm:text-lg title-second text-white text-center'>La FECASCRAB invite toutes les écoles à rejoindre cette initiative ambitieuse.

Offrons aux jeunes camerounais une plateforme où apprendre,

s’exprimer et exceller à travers le Scrabble.</p>
            <div>
                
              <Link to="/creation-club"><Button className="bg-red-600 title-font rounded-full  text-white text-2xl  py-6 px-12">Rejoignez-nous</Button></Link>
               
            </div>
        </div>
        </div>
        <div style={{ background:`url(${slider})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}  
    className="relative px-24 hidden  max-sm:px-3 max-sm:flex max-sm:flex-col max-sm:items-center gap-5 max-sm:justify-center justify-center max-sm:mx-4  items-center    mx-24  mt-12 h-[100vh]">
          <h2 className="text-white text-center text-6xl title-font max-sm:text-4xl font-bold">Participez à l'Aventure</h2>
          <p className='text-2xl max-sm:text-lg title-second text-white text-center'>La FECASCRAB invite toutes les écoles à rejoindre cette initiative ambitieuse.

Offrons aux jeunes camerounais une plateforme où apprendre,

s’exprimer et exceller à travers le Scrabble.</p>
          <Link to="/creation-club"><Button className="bg-red-600 mb-[6rem] title-font  rounded-full text-white text-2xl  py-8 px-12">Rejoignez-nous</Button></Link>
            
                
           
        </div>
    </section>
    
  )
}
