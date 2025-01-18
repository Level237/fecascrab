import { Album } from "../../types/gallery";
import coverIvoire from "../../assets/abidjanCover1.jpg"
import lomeCover from "../../assets/lomeCover.png"
import bamakoCover from "../../assets/MINSEP.jpg"
import dakarCover from "../../assets/dakar.jpg"
export const albums: Album[] = [
  {
    id: 'abidjan-2017',
    title: 'Abidjan 2017',
    year: '2017',
    coverImage: coverIvoire,
    photoCount: 123,
    photos: Array(123).fill(null).map((_, i) => ({
      id: i,
      src: "/placeholder.svg?height=400&width=600",
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
    photos: Array(10).fill(null).map((_, i) => ({
      id: i,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Lome 2016 photo ${i + 1}`,
      caption: `Conférence de Lomé - Jour ${i + 1}`,
      date: `2016-06-${String(i + 1).padStart(2, '0')}`
    }))
  },
  {
    id: 'bamako-2018',
    title: 'Bamako 2018',
    year: '2018',
    coverImage: bamakoCover,
    photoCount: 2,
    photos: Array(2).fill(null).map((_, i) => ({
      id: i,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Bamako 2018 photo ${i + 1}`,
      caption: `Visite de Bamako - Jour ${i+1}`,
      date: `2018-01-${String(i + 1).padStart(2, '0')}`
    }))
  },
  {
    id: 'dakar-2021',
    title: 'Dakar 2021',
    year: '2021',
    coverImage: dakarCover,
    photoCount: 208,
    photos: Array(208).fill(null).map((_, i) => ({
      id: i,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Dakar 2021 photo ${i + 1}`,
      caption: `Séminaire à Dakar - Session ${i + 1}`,
      date: `2021-${String(Math.floor(i / 30) + 1).padStart(2, '0')}-${String(i % 30 + 1).padStart(2, '0')}`
    }))
  }
]

