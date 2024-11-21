import React from 'react'

export default function Homepage() {
  return (
    <section style={{ background:"url('BG_Site.jpg')",backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className='w-full rounded-md relative h-[100vh] justify-start pt-20 flex flex-col items-center'>
      <div>
        <h2 className='font-bold'>LA FEDERATION CAMEROUNAISE DE SCRABBLE ORGANISE LES</h2>
      </div>
      <div>
        <img src="logo_fecascrab.png" alt="" className='w-[27rem] h-[28rem] mt-[-4rem]' />
      </div>
      <div className='grid mt-[-5rem] grid-cols-4 gap-4'>
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
        </div>
        <div>
          <h2 className='text-md font-bold text-white'>JOURS</h2>
        </div>
        </div>
       
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
        </div>
        <div>
          <h2 className='text-md font-bold text-white'>HEURES</h2>
        </div>
        </div>
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
        </div>
        <div>
          <h2 className='text-md font-bold text-white'>MINUTES</h2>
        </div>
        </div>
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 className='text-5xl font-bold'>0</h2>
                </div>
              
        </div>
        <div>
          <h2 className='text-md font-bold text-white'>SECONDES</h2>
        </div>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}
