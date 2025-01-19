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


import dak1 from "../assets/galeries/dak/dak1.jpg"
import dak2 from "../assets/galeries/dak/dak2.jpg"
import dak3 from "../assets/galeries/dak/dak3.jpg"
import dak4 from "../assets/galeries/dak/dak4.jpg"
import dak5 from "../assets/galeries/dak/dak5.jpg"
import dak6 from "../assets/galeries/dak/dak6.jpg"
import dak7 from "../assets/galeries/dak/dak7.jpg"
import dak8 from "../assets/galeries/dak/dak8.jpg"
import dak9 from "../assets/galeries/dak/dak9.jpg"
import dak10 from "../assets/galeries/dak/dak10.jpg"


import abi1 from "../assets/galeries/abi/abi1.jpg"
import abi2 from "../assets/galeries/abi/abi2.jpg"
import abi3 from "../assets/galeries/abi/abi3.jpg"
import abi4 from "../assets/galeries/abi/abi4.jpg"
import abi5 from "../assets/galeries/abi/abi5.jpg"
import abi6 from "../assets/galeries/abi/abi6.jpg"
import abi7 from "../assets/galeries/abi/abi7.jpg"
import abi8 from "../assets/galeries/abi/abi8.jpg"
import abi9 from "../assets/galeries/abi/abi9.jpg"
import abi10 from "../assets/galeries/abi/abi10.jpg"


export const albums: Album[] = [
  {
    id: 'abidjan-2017',
    title: 'Abidjan 2017',
    year: '2017',
    coverImage: coverIvoire,
    photoCount: 123,
    photos: [
      {
        id: 0,
        src: abi1,
        alt: `Abidjan 2017 photo 1`,
      },
      {
        id: 1,
        src: abi2,
        alt: `Abidjan 2017 photo 2`,
      },
      {
        id: 2,
        src: abi3,
        alt: `Abidjan 2017 photo 3`,
      },
      {
        id: 3,
        src: abi4,
        alt: `Abidjan 2017 photo 4`,
      },
      {
        id: 4,
        src: abi5,
        alt: `Abidjan 2017 photo 5`,
      },
      {
        id: 5,
        src: abi6,
        alt: `Abidjan 2017 photo 6`,
      },
      {
        id: 6,
        src: abi7,
        alt: `Abidjan 2017 photo 7`,
      },
      {
        id: 7,
        src: abi8,
        alt: `Abidjan 2017 photo 8`,
      },
      {
        id: 8,
        src: abi9,
        alt: `Abidjan 2017 photo 9`,
      },
      {
        id: 9,
        src: abi10,
        alt: `Abidjan 2017 photo 10`,
      },
      
    ]
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
    photos: [
      {
        id: 0,
        src: dak1,
        alt: `Dakar 2021 photo 1`,
      },
      {
        id: 1,
        src: dak2,
        alt: `Dakar 2021 photo 2`,
      },
      {
        id: 2,
        src: dak3,
        alt: `Dakar 2021 photo 3`,
      },
      {
        id: 3,
        src: dak4,
        alt: `Dakar 2021 photo 4`,
      },
      {
        id: 4,
        src: dak5,
        alt: `Dakar 2021 photo 5`,
      },
      {
        id: 5,
        src: dak6,
        alt: `Dakar 2021 photo 6`,
      },
      {
        id: 6,
        src: dak7,
        alt: `Dakar 2021 photo 7`,
      },
      {
        id: 7,
        src: dak8,
        alt: `Dakar 2021 photo 8`,
      },
      {
        id: 8,
        src: dak9,
        alt: `Dakar 2021 photo 9`,
      },
      {
        id: 9,
        src: dak10,
        alt: `Dakar 2021 photo 10`,
      },
    ]
  }
]

