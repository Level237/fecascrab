import medalOr from "../assets/gold medal.png"
import medalArgent from "../assets/silver medal.png"
import medamBronze from "../assets/bronze medal.png"

export default function Figures() {
  return (
    <div className='flex flex-row  max-sm:flex-col items-center mt-12 max-sm:gap-12   justify-center'>
      <div className='flex gap-2 mr-24 flex-col max-sm:justify-between max-sm:mr-0  items-center'>
        <img className="w-36 h-36 max-sm:w-28 max-sm:h-28" src={medalOr} alt="" />
        <div>
            <h2 className='text-5xl max-sm:text-4xl font-bold text-red-700'>14</h2>
        </div>
        <div className=''>
            <h2 className='text-2xl text-center  font-bold text-black'>médailles
                <br />
                d'or</h2>
        </div>
      </div>
      <div className='flex gap-2 mr-24 flex-col max-sm:justify-center max-sm:mr-0  items-center'>
          <img className="w-36 h-36 max-sm:w-28 max-sm:h-28" src={medalArgent} alt="" />
      <div>
            <h2 className='text-5xl max-sm:text-4xl font-bold text-red-700'>09</h2>
        </div>
        <div className=''>
            <h2 className='text-2xl text-center  font-bold text-black'>médailles 
                <br />
            d'argent</h2>
        </div>
      </div>
      <div className='flex gap-2 flex-col items-center'>
          <img className="w-36 h-36 max-sm:w-28 max-sm:h-28" src={medamBronze} alt="" />
      <div>
            <h2 className='text-5xl max-sm:text-4xl font-bold text-red-700'>09</h2>
        </div>
        <div className=''>
            <h2 className='text-2xl text-center  font-bold text-black'>médailles
                <br />
                de bronze</h2>
        </div>
      </div>
    </div>
  )
}