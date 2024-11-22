import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../components/ui/skeleton';

export default function Homepage() {

  const [startDate,setStartDate]=useState(Date.now())
  const [loading,setLoading]=useState(false)
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
      setLoading(true)
  }, 1000);

  return () => clearInterval(interval);
}, [startDate, endDate]);

  return (
    <section style={{ background:"url('BG_Site.jpg')",backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className='w-full bg-[#02abee] rounded-md relative h-[100%] justify-start pt-20 flex flex-col items-center'>
      <div>
        <h2 className='font-bold'>LA FEDERATION CAMEROUNAISE DE SCRABBLE ORGANISE LES</h2>
      </div>
      <div>
        <img src="logo_fecascrab.png" alt="" className='w-[27rem] h-[28rem] mt-[-4rem]' />
      </div>
      {!loading && <div className='grid mt-[-5rem] gap-4 grid-cols-4'>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
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
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
      </div>
      <div>
          <h2 className='text-md font-bold text-white'>Heures</h2>
        </div>
      </div>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        <div className='ml-2'>
                  <h2 className='text-white font-bold text-2xl'>:</h2>
                </div>
      </div>
      <div>
          <h2 className='text-md font-bold text-white'>Minutes</h2>
        </div>
      </div>
      <div className='flex gap-3 justify-center flex-col items-center'>
      <div className='flex gap-1 items-center flex-row'>
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        <Skeleton className="bg-gray-200 rounded-xl w-4 px-5 py-8" />
        
      </div>
      <div>
          <h2 className='text-md font-bold text-white'>Secondes</h2>
        </div>
      </div>
        </div>}
        {loading && <div className='grid mt-[-5rem] grid-cols-4'>
        <div className='flex gap-3 justify-center flex-col items-center'>
        <div className='flex gap-1 items-center flex-row'>
                
                      {timeRemaining.jours && timeRemaining.jours.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>{el}</h2></div>)}

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
        {timeRemaining.heures?.toString().length==1  && timeRemaining.heures==0  && timeRemaining.heures?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>0</h2></div>}
        {timeRemaining.heures!==0  && timeRemaining.heures?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>0</h2></div>}
                      {timeRemaining.heures?.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>{el}</h2></div>)}
             
              
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
        {timeRemaining.minutes?.toString().length==1  && timeRemaining.minutes==0  && timeRemaining.minutes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>0</h2></div>}
        {timeRemaining.minutes!==0  && timeRemaining.minutes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>0</h2></div>}
              {timeRemaining.minutes?.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>{el}</h2></div>)}
              
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
          {timeRemaining.secondes?.toString().length==1  && timeRemaining.secondes==0  && timeRemaining.secondes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>0</h2></div>}
          {timeRemaining.secondes!==0  && timeRemaining.secondes?.toString().length!==2 && <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>0</h2></div>}
        {timeRemaining.secondes?.toString().split("").map((el:any)=> <div className='bg-white rounded-xl px-3 py-3'><h2 className='text-5xl font-bold'>{el}</h2></div>)}
        </div>
        <div>
          <h2  className='text-md font-bold text-white'>SECONDES</h2>
        </div>
        </div>
      </div>}
      
      <div className='mt-8 mb-24'>
        <Link to="/inscription"><Button className='bg-red-700 px-16 text-sm py-6 text-white'>S'INSCRIRE</Button></Link>
          
      </div>
      <div className='w-full   flex justify-center items-center h-16 relative bg-[#107a5f]'>
        <img className='w-20 absolute top-[-30px]' src="/logo.png" alt="" />
      </div>
    </section>
  )
}
