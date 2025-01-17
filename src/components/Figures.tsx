import medalOr from "../assets/gold medal.png"
import medalArgent from "../assets/silver medal.png"
import medamBronze from "../assets/bronze medal.png"
import AnimatedCount from "./animated-count"

export default function Figures() {
  return (
    <div className='flex flex-row  max-sm:flex-col items-center mt-12 max-sm:gap-12   justify-center'>
      <div className='flex gap-2 mr-24 flex-col max-sm:justify-between max-sm:mr-0  items-center'>
        <img className="w-36 h-36 max-sm:w-28 max-sm:h-28" src={medalOr} alt="" />
        <AnimatedCount count={14} index={1} type="d'or" />
      </div>
      <div className='flex gap-2 mr-24 flex-col max-sm:justify-center max-sm:mr-0  items-center'>
          <img className="w-36 h-36 max-sm:w-28 max-sm:h-28" src={medalArgent} alt="" />
          <AnimatedCount count={9} index={2} type="d'argent" />
      </div>
      <div className='flex gap-2 flex-col items-center'>
          <img className="w-36 h-36 max-sm:w-28 max-sm:h-28" src={medamBronze} alt="" />
          <AnimatedCount count={9} index={3} type="de bronze" />
      </div>
    </div>
  )
}