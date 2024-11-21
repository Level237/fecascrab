import { Button } from '../components/ui/button'
import React, { useEffect, useState } from 'react'

export default function Homepage() {

  const [startDate,setStartDate]=useState(Date.now())
  const [endDate,setEndDate]=useState('2025-03-12T10:00')
  const [timeRemaining, setTimeRemaining] = useState({});
  const calculerTempsRestant = (d1:any, d2:any) => {
    const now:any = new Date();
    const d2Date:any = new Date(d2);
    const diff = d2Date - now;

    if (diff < 0) {
        return { jours: 0, heures: 0, minutes: 0, secondes: 0 };
    }

    const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
    const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((diff % (1000 * 60)) / 1000);

    return { jours, heures, minutes, secondes };
};

useEffect(() => {
  const interval = setInterval(() => {
      setTimeRemaining(calculerTempsRestant(startDate,endDate));
  }, 1000);

  return () => clearInterval(interval);
}, [startDate, endDate]);

  return (
    <section style={{ background:"url('BG_Site.jpg')",backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className='w-full bg-[#02abee] rounded-md relative h-[100vh] justify-start pt-20 flex flex-col items-center'>
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
                      <h2 className='text-5xl font-bold'>{timeRemaining.jours}</h2>
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
                      <h2 className='text-5xl font-bold'>{timeRemaining.heures}</h2>
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
                      <h2 className='text-5xl font-bold'>{timeRemaining.minutes}</h2>
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
                      <h2 className='text-5xl font-bold'>{timeRemaining?.secondes}</h2>
                </div>
                <div className='bg-white rounded-xl px-3 py-3'>
                      <h2 id='seconde' className='text-5xl font-bold'>0</h2>
                </div>
              
        </div>
        <div>
          <h2  className='text-md font-bold text-white'>SECONDES</h2>
        </div>
        </div>
      </div>
      <div className='mt-8'>
          <Button className='bg-red-700 px-16 text-sm py-6 text-white'>S'INSCRIRE</Button>
      </div>
    </section>
  )
}
