import InscriptionForm from '../components/forms/InscriptionForm'
import logo from "../assets/logo.png"
import bgHome from "../assets/BG_Site.jpg"
import logoOff from "../assets/logo-officiel.png"
import { Skeleton } from '../components/ui/skeleton'
import { useState } from 'react'
export default function Inscription() {

  const [imageLoad,setImageLoad]=useState(false)

  const handleImageLoaded=()=>{
    setImageLoad(true)
    console.log('true')
  }
  return (
    <section>
          <section className='flex flex-col gap-20 '>
      <div className='bg-blue-600 w-full h-44 flex justify-center items-center relative'>
                <div className='absolute bottom-[-80px] z-50'>
                 
                 
                    <img className='w-48 h-48 rounded-xl' src={logoOff} alt="logo fecascrab" onLoad={handleImageLoaded} />
                </div>
                <div className='absolute bottom-[-80px] z-50'>
                {!imageLoad &&  <Skeleton className='w-48 h-48 bg-slate-50' />}
                </div>
      </div>

    <section className='flex flex-col items-center justify-center'>
            <div>
                <h2 className='font-bold text-center text-3xl max-sm:text-xl'>FICHE D’INSCRIPTION AUX SUPER MASTERS <br /> DE SCRABBLE 2025</h2>
            </div>
            <div className='mt-7'>
                <h2 className='font-bold text-center text-xl max-sm:text-md'>DATES: DU 12 au 16 mars 2025 &#x2022; EDITIONS:DUPLICATE ET CLASSIQUE <br />LIEU:DOUALA-CAMEROUN</h2>
            </div>

    </section>

    <section className='mx-36 max-sm:mx-5'>
        <InscriptionForm/>
    </section>
    
    </section>
    <section className='w-full h-48' style={{ background:`url(${bgHome})`,backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} >

</section>
<div className='w-full   flex justify-center items-center h-16 relative bg-[#107a5f]'>
        <img className='w-20 absolute top-[-30px]' src={logo} alt="" />
      </div>
    </section>
    
  )
}
