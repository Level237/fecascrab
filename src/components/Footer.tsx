import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <section className="flex flex-col mt-16 items-center justify-center   p-8 relative bg-[#107a5f]">
            <div className='w-full   flex justify-center '>
        <img className='w-28 absolute max-sm:w-28 top-[-50px] ' src={logo} alt="" />
      </div>
        <div className="relative mt-12">
                <h2 className="text-white text-xl max-sm:text-lg text-center">Fecascrab</h2>
        </div>
        <div className="relative">
                <h2 className="text-white text-xl max-sm:text-lg  text-center">Féderation Camerounaise de Scrabble</h2>
        </div>
        <div className="relative">
                <h2 className="text-white text-xl max-sm:text-lg  text-center" >Siège social: <span className="font-bold">Montée Anne Rouge - Yaoundé</span> 
                </h2>
        </div>
        <div className="relative">
                <h2 className="text-white text-xl max-sm:text-lg  text-center">Tel: Secrétaire général <span className="font-bold">(+237) 694 789 400</span> 
                </h2>
        </div>
    </section>
    
  )
}
