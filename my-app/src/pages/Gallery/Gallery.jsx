import React, { useEffect, useState } from 'react'
import '../Gallery/gallery.scss'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Gallery() {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    // const importImages = async () => {
    //   const images = import.meta.globEager('../../images/*.{png,jpg,jpeg,svg}');
    //   const paths = Object.values(images).map(image => image.default);

    //   setImagePaths(paths);
    // };

    const importImages = async () => {
      const context = require.context('../../../public/images', false, /\.(png|jpg|jpeg|svg)$/);
      const paths = context.keys().map(context);
      console.log("path",paths)
      setImagePaths(paths);
    };

    importImages();
  }, []);
  return (
    <div className='gallery_container'>
      <Navbar />

      <div>
        {/* <p className='title'>PROJECT GALLERY</p> */}
        <p className='header'>QUALITY CRAFTSMANSHIP FOR A WIDE RANGE OF <br></br>APPLICATIONS & INDUSTRIES</p>
        <p className='paragraph'>All our projects are covered by a full non-disclosure agreement—keeping your ideas safe—and backed by a 100% performance guarantee, ensuring that the finished product will perform as designed. Here are just a few examples of our craftsmanship.</p>
      </div>
      <div className="grid-container">
        {imagePaths.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} className='grid-image' />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
