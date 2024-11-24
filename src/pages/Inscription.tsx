import InscriptionForm from '../components/forms/InscriptionForm'


export default function Inscription() {
  return (
    <section>
          <section className='flex flex-col gap-20 '>
      <div className='bg-blue-600 w-full h-44 flex justify-center items-center relative'>
                <div className='absolute bottom-[-80px] z-50'>
                    <img className='w-48 h-48' src="/logo-officiel.png" alt="" />
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
    <section className='w-full h-48' style={{ background:"url('BG_Site.jpg')",backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} >

</section>
<div className='w-full   flex justify-center items-center h-16 relative bg-[#107a5f]'>
        <img className='w-20 absolute top-[-30px]' src="/logo.png" alt="" />
      </div>
    </section>
    
  )
}
