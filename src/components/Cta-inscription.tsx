
import slider from "../assets/slide12.jpg"
import { Button } from "./ui/button"
import sliderResponsive from "../assets/responsive_MasterScrabble.jpg"
import { Link } from "react-router-dom"
export default function CtaInscription() {
  return (
    <section>
            <div style={{ background:`url(${slider})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}  
    className="relative px-24 flex items-center justify-between mb-12 mx-24 max-sm:hidden mt-12 h-[300px] flex-2">
          <div className="w-96">

          </div>
        <div className="  flex flex-col gap-4 items-center">
            
                    <h2 className="text-white text-center text-4xl max-sm:text-2xl font-bold">INSCRIVEZ VOUS <br />DES MAINTENANT</h2>
            <div>
              <Link to="/inscription"><Button className="bg-red-600 rounded-full text-white text-lg  py-6 px-12">S'INSCRIRE</Button></Link>
               
            </div>
        </div>
        </div>
        <div style={{ background:`url(${sliderResponsive})`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat" }}  
    className="relative px-24 hidden  max-sm:px-0 max-sm:flex max-sm:items-end max-sm:justify-center max-sm:mx-4  items-center    mx-24  mt-12 h-[100vh] flex">
          
          <Link to="/inscription"><Button className="bg-red-600 mb-[6rem]  rounded-full text-white text-lg  py-6 px-12">S'INSCRIRE</Button></Link>
            
                
           
        </div>
    </section>
    
  )
}
