import React, { useEffect, useState } from 'react'
import '../Gallery/gallery.scss'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Gallery() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = import.meta.globEager('../../images/*.{png,jpg,jpeg,svg}');
      const paths = Object.values(images).map(image => image.default);

      setImagePaths(paths);
    };

    importImages();
  }, []);
  return (
    <div className='gallery_container'>
    <Navbar/>
      <div className="image-grid">
      {imagePaths.map((path, index) => (
        <div className="image-item" key={index}>
          <img src={path} alt={`Image ${index + 1}`} />
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  )
}
