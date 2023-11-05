
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import '../About/about.scss'
import about_image from '../../other_images/about.jpg'


export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about_container">
        <div className='image_container'>
          <img src={about_image} className='welding_image'></img>
        </div>

        <div className="header">
          <p>YOUR SINGLE SOURCE PROVIDER FOR <br></br>CUSTOM FABRICATED METAL PROJECTS</p>
        </div>
        <div className="para">
          <p>VARDHMAN-ELECTRO-MECH has been established as a manufacturing company in Gandhinagar(Gujarat)
            since 1995. it is one of the known reputed compnay in india for design, manufacturing and supply of sheet metal
            enclosures in Stainless steel, mild steel and aluminum, structural fabrication as per customers drawing
            and specs, Oil feild equipments and special purpose machineries as per cutomers specs.<br></br><br></br>We are able to offer wide range of Fabrications. We have a qualified and experienced team of engineers and technicians.
            We have Inhouse powder coating plant to provide finished products.</p>
        </div>
      <div className="legend_div">

        <div className='legend'>WHAT MAKES US DIFFERENT</div>
        <div className='legend_title'>Product Longetivity</div>
        <div className='legend_text'>We have equipment still operating in the field that was built over 57 years ago.</div>

        <div className='legend_title'>Experienced Craftsmen and Staff</div>
        <div className='legend_text'>Our extraordinary craftsmen have an average of 23+ years of welding experience and are skilled <br></br> in a variety of unique and difficult materials as well as challenging designs.<br></br> Our staff has an average of 20+ years of manufacturing experience.</div>

        <div className='legend_title'>Superb Workmanship Backed with a Guarantee</div>
        <div className='legend_text'>We are so confident in the workmanship and performance of our finished product that we offer<br></br> a 100% performance guarantee, ensuring that all finished products we manufacture will perform <br></br>and achieve the specific results for which they were designed.</div>

        <div className='legend'>OUR VISION</div>
        <div className='legend_text'>To provide best quality services that exceeds the expectations of our esteemed customers.</div>
        
        <div className='legend'>OUR MISSION</div>
        <div className='legend_text'>To build long term relations with customers and clients and provide exceptional customer services<br></br> by pursuing business through innovation and advanced technology.</div>

        <div className='legend'>CORE VALUES</div>
        <div className='legend_text'>We believe in treating our cutomers with respect and faith, We grow through creativity, invention and innovation. <br></br>We integrate honesty, Integrity and business ethics into all aspects of our business functioning.</div>

      </div>

      

      </div>
      <Footer />
    </div>
  )
}
