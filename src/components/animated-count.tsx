import { animate, useInView,motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCount({count,index,type}:{count:number,index:number,type:string}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [displayCount, setDisplayCount] = useState(0)
    useEffect(() => {
        if (isInView) {
          const controls = animate(0, count, {
            duration: 2,
            onUpdate: (value) => setDisplayCount(Math.floor(value)),
            ease: "easeOut",
            delay: index * 0.2,
          })
    
          return () => controls.stop()
        }
      }, [isInView, count, index])
  return (
    <div ref={ref} className="flex flex-col items-center space-y-2">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="text-center title-bold"
      >
        <div className="text-5xl max-sm:text-4xl font-bold text-red-700">
          {displayCount.toString().padStart(2, '0')}
        </div>
        <div className="text-2xl text-center mt-4  font-bold text-black">
          médailles
          <br />
          {type}
        </div>
      </motion.div>
    </div>
  )
}
