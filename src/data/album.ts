import { Album } from "../types/gallery";
import coverIvoire from "../assets/abidjanCover1.jpg"
import lomeCover from "../assets/lomeCover.png"
import bamakoCover from "../assets/MINSEP.jpg"
import dakarCover from "../assets/dakar.jpg"
import bam1 from "../assets/galeries/bam/bam1.jpg"
import bam2 from "../assets/galeries/bam/bam2.jpg"
import lom1 from "../assets/galeries/lom/lom1.png"
import lom2 from "../assets/galeries/lom/lom2.jpg"
import lom3 from "../assets/galeries/lom/lom3.jpg"
import lom4 from "../assets/galeries/lom/lom4.jpg"
import lom5 from "../assets/galeries/lom/lom5.jpg"
import lom6 from "../assets/galeries/lom/lom6.jpg"
import lom7 from "../assets/galeries/lom/lom7.jpg"
import lom8 from "../assets/galeries/lom/lom8.jpg"
import lom9 from "../assets/galeries/lom/lom9.jpg"
import lom10 from "../assets/galeries/lom/lom10.jpg"
export const albums: Album[] = [
  {
    id: 'abidjan-2017',
    title: 'Abidjan 2017',
    year: '2017',
    coverImage: coverIvoire,
    photoCount: 123,
    photos: Array(123).fill(null).map((_, i) => ({
      id: i,
      src: coverIvoire,
      alt: `Abidjan 2017 photo ${i + 1}`,
      caption: `Formation professionnelle à Abidjan - Session ${i + 1}`,
      date: `2017-${String(Math.floor(i / 30) + 1).padStart(2, '0')}-${String(i % 30 + 1).padStart(2, '0')}`
    }))
  },
  {
    id: 'lome-2016',
    title: 'Lome 2016',
    year: '2016',
    coverImage: lomeCover,
    photoCount: 10,
    photos: [{
      id: 0,
      src: lom1,
      alt: `Lome 2016 photo 1`,
    },{
      id: 1,
      src: lom2,
      alt: `Lome 2016 photo 2`,
    },{
      id: 2,
      src: lom3,
      alt: `Lome 2016 photo 3`,
    },{
      id: 3,
      src: lom4,
      alt: `Lome 2016 photo 4`,
    },{
      id: 4,
      src: lom5,
      alt: `Lome 2016 photo 5`,
    },{
      id: 5,
      src: lom6,
      alt: `Lome 2016 photo 6`,
    },{
      id: 6,
      src: lom7,
      alt: `Lome 2016 photo 7`,
    },{
      id: 7,
      src: lom8,
      alt: `Lome 2016 photo 8`,
    },{
      id: 8,
      src: lom9,
      alt: `Lome 2016 photo 9`,
    },{
      id: 9,
      src: lom10,
      alt: `Lome 2016 photo 10`,
    }
    

  
  ]
  },
  {
    id: 'bamako-2018',
    title: 'Bamako 2018',
    year: '2018',
    coverImage: bamakoCover,
    photoCount: 2,
    photos: [
      {
        id: 0,
        src: bam1,
        alt: `Bamako 2018 photo 1`,
      },
      {
        id: 1,
        src: bam2,
        alt: `Bamako 2018 photo 2`,

      }
    ],
  },
  {
    id: 'dakar-2021',
    title: 'Dakar 2021',
    year: '2021',
    coverImage: dakarCover,
    photoCount: 208,
    photos: Array(208).fill(null).map((_, i) => ({
      id: i,
      src: dakarCover,
      alt: `Dakar 2021 photo ${i + 1}`,
      caption: `Séminaire à Dakar - Session ${i + 1}`,
      date: `2021-${String(Math.floor(i / 30) + 1).padStart(2, '0')}-${String(i % 30 + 1).padStart(2, '0')}`
    }))
  }
]

