
import HeaderSection from '../components/headerSection'
import slide from "../assets/contact.jpg"
import NavMobile from '../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import Footer from '../components/Footer'
import JoinTeam from '../components/forms/JoinTeam'
export default function ContactPage() {


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
        <NavMobile/>
        <div className='mt-12 flex flex-col items-center gap-4 justify-center max-sm:mx-4'>
                <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>Contact</h2>

            </div>
        <div style={{ background:`url(${slide})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat" }} 
    className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
        
    </div>

        <section className='flex mt-16 flex-col justify-center max-sm:mx-4 mx-44 gap-6'>
       
           
            <div>
      
      </div>
        <JoinTeam source='Contact'/>
        </section>
       
       
    <Footer/>
    </section>}

    {loading && <Loader/>}
    </>
   
  )
}
