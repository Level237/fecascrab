export interface Photo {
    id: number
    src: string
    alt: string
    caption: string
    date?: string
  }
  
  export interface Album {
    id: string
    title: string
    year: string
    coverImage: string
    photoCount: number
    photos: Photo[]
  }
  
  