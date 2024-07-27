import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 


const campamentoImages = [
  {
    original: './Galeria1.jpg',
    thumbnail: './Galeria1.jpg',
    description: 'Campamento 2024 ',
  },
  {
    original: './Galeria2.jpg',
    thumbnail: './Galeria2.jpg',
    description: 'Campamento 2024',
  },
  {
    original: './Galeria3.jpg',
    thumbnail: './Galeria3.jpg',
    description: 'Campamento 2024',
  },
  {
    original: './Galeria4.jpg',
    thumbnail: './Galeria4.jpg',
    description: 'Reuniones de Hombres',
  },
  {
    original: './Galeria5.jpg',
    thumbnail: './Galeria5.jpg',
    description: 'Reuniones de Hombre',
  },
  {
    original: './Galeria6.jpg',
    thumbnail: './Galeria6.jpg',
    description: 'Reuniones de Hombres',
  },
  {
    original: './Galeria7.jpg',
    thumbnail: './Galeria7.jpg',
    description: 'Reuniones de Mujeres',
  },
  {
    original: './Galeria8.jpg',
    thumbnail: './Galeria8.jpg',
    description: 'Reuniones de Mujeres',
  },
  {
    original: './Galeria9.jpg',
    thumbnail: './Galeria9.jpg',
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