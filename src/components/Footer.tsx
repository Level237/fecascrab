import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <section className="flex flex-col mt-16 items-center justify-center    p-8 relative bg-[#107a5f]">
            <div className='w-full   flex justify-center '>
        <img className='w-28 absolute max-sm:w-28 top-[-36px] ' src={logo} alt="" />
      </div>
        <div className="relative mt-12">
                <h2 className="text-white text-lg max-sm:text-lg text-center">Fecascrab</h2>
        </div>
        <div className="relative">
                <h2 className="text-white text-lg max-sm:text-lg  text-center">Féderation Camerounaise de Scrabble</h2>
        </div>
        <div className="relative">
                <h2 className="text-white text-lg max-sm:text-sm  text-center" >Siège social: <span className="font-bold">Montée Anne Rouge - Yaoundé</span> 
                </h2>
        </div>
        <div className="relative">
                <h2 className="text-white text-lg max-sm:text-sm  text-center">Tel: Secrétaire général <span className="font-bold max-sm:text-sm">(+237) 694 789 400 /</span> Email : <span className="font-bold">contact@fecascrab.com</span>
                </h2>
        </div>
    </section>
    
  )
}
