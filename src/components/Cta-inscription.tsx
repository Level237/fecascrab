
import slider from "../assets/SliderWeb.jpeg"
import { Button } from "./ui/button"
import sliderResponsive from "../assets/responsive_MasterScrabble.jpg"
import { Link } from "react-router-dom"
export default function CtaInscription() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div style={{ background: `url(${slider})`, backgroundPosition: "top", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        className="relative px-24 flex items-center justify-between mb-12 mx-24 max-sm:hidden mt-12 h-[400px] flex-2">
        <div className="w-96">

        </div>
        <div className="  flex flex-col gap-4 items-center">

          <h2 className="text-white hidden text-center text-5xl max-sm:text-2xl title-font font-bold">INSCRIVEZ VOUS <br />DES MAINTENANT</h2>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Link to="/inscription-scrabble-2026"><Button className="bg-red-600  max-sm:text-2xl title-font rounded-full text-white text-2xl  py-6 px-12">S'INSCRIRE</Button></Link>

          </div>
        </div>
      </div>
      <div style={{ background: `url(${sliderResponsive})`, backgroundPosition: "top", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        className="relative px-24 hidden   max-sm:px-0 max-sm:flex max-sm:items-end max-sm:justify-center max-sm:mx-4  items-center    mx-24  mt-12 h-[60vh] flex">

        <Link to="/inscription-scrabble-2026"><Button className="bg-red-600 text-2xl max-sm:text-2xl title-font mb-[2rem]  rounded-full text-white    py-7 px-12">S'INSCRIRE</Button></Link>



      </div>
    </section>

  )
}
