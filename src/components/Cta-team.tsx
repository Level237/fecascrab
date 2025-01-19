
import slider from "../assets/team.jpg"
import { Button } from "./ui/button"

import { Link } from "react-router-dom"
export default function CtaTeam() {
  return (
    <section>
            <div style={{ background:`url(${slider})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}  
    className="relative px-24 flex items-center justify-center mb-12 mx-24 max-sm:hidden mt-12 h-[400px] flex-2">
         
        <div className="  flex flex-col gap-4 items-center">
            
                    <h2 className="text-white text-center text-6xl title-font max-sm:text-2xl font-bold">Participez à l'Aventure</h2>
            <p className='text-2xl title-second max-sm:text-lg text-white text-center'>Vous souhaitez en savoir plus sur l’équipe nationale ou soutenir nos joueurs ? 

Contactez la FECASCRAB pour découvrir comment contribuer à cette belle aventure</p>
            <div>
                
              <Link to="/rejoindre-equipe-national"><Button className="bg-red-600 title-font rounded-full  text-white text-2xl  py-6 px-12">Contactez-nous</Button></Link>
               
            </div>
        </div>
        </div>
        <div style={{ background:`url(${slider})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}  
    className="relative px-24 hidden  max-sm:px-3 max-sm:flex max-sm:flex-col max-sm:items-center gap-5 max-sm:justify-center justify-center max-sm:mx-4  items-center    mx-24  mt-12 h-[100vh]">
          <h2 className="text-white text-center text-6xl title-font max-sm:text-4xl font-bold">Participez à l'Aventure</h2>
          <p className='text-2xl title-second max-sm:text-lg text-white text-center'>Vous souhaitez en savoir plus sur l’équipe nationale ou soutenir nos joueurs ? 

Contactez la FECASCRAB pour découvrir comment contribuer à cette belle aventure</p>
          <Link to="/rejoindre-equipe-national"><Button className="bg-red-600 mb-[6rem] title-font  rounded-full text-white text-2xl  py-8 px-12">Contactez-nous</Button></Link>
            
                
           
        </div>
    </section>
    
  )
}
