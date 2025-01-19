
import HeaderSection from '../components/headerSection'
import slide from "../assets/slideOrigine.jpeg"
import NavMobile from '../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import { Gallery } from '../components/gallery/Gallery'
import { ScrollRestoration } from 'react-router-dom'



export default function GaleryPage() {


  const [loading, setLoading] = useState(true);
    
  useEffect(() => {

      const fetchData = async () => {
  
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
      };
  
      fetchData();
    }, []);
  return (

    <>
    {!loading &&  <section>
        <HeaderSection />
        <ScrollRestoration/>
        <NavMobile/>
        <div style={{ background:`url(${slide})`,backgroundPosition:"top",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
        <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 max-sm:left-12 bg-red-600'>
            <h2 className='text-4xl max-sm:text-3xl title-font text-white font-bold'>Gallerie</h2>
        </div>
    </div>

    <section className='mx-32 mt-24 max-sm:mx-4'>
              
        
      <Gallery/>
           
    </section>
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
   
  )
}
