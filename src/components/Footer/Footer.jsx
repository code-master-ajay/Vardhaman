import '../Footer/footer.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { BsArrowRight } from 'react-icons/bs'

export default function Footer() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDIbgOCsLxqNbLgp3yV485wCbWraGLexFQ',
  });
  const center = useMemo(() => ({ lat: 23.251391270833157, lng: 72.63238172385545 }), []);
   

  return (
    <div className='footer_container'>
      <div className='top_button'>
        CONTACT
        <BsArrowRight></BsArrowRight>
      </div>
      <div className="footer_top">
      <div className='left'>

        <h3>VARDHAMAN ELECTROMECH</h3>

        <div className="address">

          <div className='location_icon'>
            <IoLocationOutline />
          </div>
          <div>
            <p>B-87/88, GIDC Electronics Estate,</p>
            <p>Sector-25, Gandhinagar, Gujarat, India.</p>
            <p>PINCODE: 382044</p>
          </div>
        </div>

        <div className="call">
          <div className="call_icon">
            <FiPhoneCall/>
          </div>
          <div>
            <p>PHONE: +91-79-23287581 / 29750245</p>
            <p>MOBILE: +91 95103 23328</p>
          </div>
        </div>

        <div className="email">
            <HiOutlineMail className="email_icon"/>
          <div>
            <p>EMAIL: sjvarhman@yahoo.com,</p>
            <p>monark58@gmail.com</p>
          </div>
        </div>


      </div>

      <div className='right'>

        <h3 className='location_text'>OUR LOCATION</h3>
        {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <MarkerF 
          position={center}
          icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          ></MarkerF>
        </GoogleMap>
      )}

      </div>
      </div>
      <div className="footer_bottom">
        <p>© 2023 VARDHMAN ELECTRO MECH. ALL RIGHTS RESERVED.</p>
      </div>

    </div>
  )
}


