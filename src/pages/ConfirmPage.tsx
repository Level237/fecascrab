import logo from "../assets/logo.png"
import bgHome from "../assets/BG_Site.jpg"
import { LucideArrowUpLeftFromSquare } from "lucide-react"
import slider from "../assets/SliderWeb.jpeg"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert"
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
export default function ConfirmPage() {

  return (
    <section>
      <section className='flex flex-col gap-20 mt-[-50px]'>
        <div style={{ background: `url(${slider})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='bg-red-600 relative mt-12 w-full h-[350px] flex justify-center items-center relative'>
          <div className='absolute bg-green-600 w-full h-full opacity-50'>

          </div>


        </div>

        <section className='flex flex-col items-center justify-center'>
          <div className='max-sm:mx-6'>
            <Alert className='w-full px-24 py-16 max-sm:px-4 bg-[#107a5f]'>
              <AlertTitle className='text-lg'><div className='flex justify-center items-center'>
                <img className='w-24' src={logo} alt="" />
              </div></AlertTitle>


              <AlertDescription className='text-xl text-center flex flex-col gap-5 items-center justify-center mt-8 text-white'>
                Félicitation votre insciption à bien été pris en compte
                <Link to="/">
                  <Button className='bg-red-600 px-5 py-5'> <LucideArrowUpLeftFromSquare />Retour</Button>
                </Link>

              </AlertDescription>
            </Alert>
          </div>


        </section>

        <section className='mx-36 max-sm:mx-5'>

        </section>

      </section>
      <section className='w-full h-48' style={{ background: `url(${bgHome})`, backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >

      </section>
      <div className='w-full   flex justify-center items-center h-16 relative bg-[#107a5f]'>
        <img className='w-20 absolute top-[-30px]' src={logo} alt="" />
      </div>
    </section>
  )
}
