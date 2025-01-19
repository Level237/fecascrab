// src/types/ImageType.ts
export interface ImageType {
    name: string;
    src: string;
  }
  
  
  
  const images = import.meta.glob('../assets/galeries/bam/*.(png|jpe?g|svg)');
  
  const loadImages = async (): Promise<any[]> => {
    const imagePromises = Object.entries(images).map(async ([path, resolver]) => {
      const src = await resolver(); // Attendre la résolution de la promesse
      return {
        name: path.split('/').pop() || '', // Nom du fichier
        src:  src,          // Assurez-vous d'accéder à src.default si nécessaire
      };
    });
  
    return imagePromises; // Assurez-vous que cela retourne bien un tableau d'ImageType
  };
  
  export default loadImages;
  