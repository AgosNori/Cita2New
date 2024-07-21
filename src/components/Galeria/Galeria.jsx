import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 


const campamentoImages = [
  {
    original: 'public/img/Fotos Campamento/Galeria1.jpg',
    thumbnail: 'public/img/Fotos Campamento/Galeria1.jpg',
    description: 'Campamento 2024 ',
  },
  {
    original: 'public/img/Fotos Campamento/Galeria2.jpg',
    thumbnail: 'public/img/Fotos Campamento/Galeria2.jpg',
    description: 'Campamento 2024',
  },
  {
    original: 'public/img/Fotos Campamento/Galeria3.jpg',
    thumbnail: 'public/img/Fotos Campamento/Galeria3.jpg',
    description: 'Campamento 2024',
  },
  {
    original: 'public/img/FOTOS EVANGELIZACION/Galeria4.jpg',
    thumbnail: 'public/img/FOTOS EVANGELIZACION/Galeria4.jpg',
    description: 'Reuniones de Hombres',
  },
  {
    original: 'public/img/FOTOS EVANGELIZACION/Galeria5.jpg',
    thumbnail: 'public/img/FOTOS EVANGELIZACION/Galeria5.jpg',
    description: 'Reuniones de Hombre',
  },
  {
    original: 'public/img/FOTOS EVANGELIZACION/Galeria6.jpg',
    thumbnail: 'public/img/FOTOS EVANGELIZACION/Galeria6.jpg',
    description: 'Reuniones de Hombres',
  },
  {
    original: 'public/img/imagenes/Galeria7.jpg',
    thumbnail: 'public/img/imagenes/Galeria7.jpg',
    description: 'Reuniones de Mujeres',
  },
  {
    original: 'public/img/imagenes/Galeria8.jpg',
    thumbnail: 'public/img/imagenes/Galeria8.jpg',
    description: 'Reuniones de Mujeres',
  },
  {
    original: 'public/img/imagenes/Galeria9.jpg',
    thumbnail: 'public/img/imagenes/Galeria9.jpg',
    description: 'Reuniones de Mujeres',
  },

  
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <ImageGallery items={campamentoImages} />
    </div>
  );
};

export default Gallery;