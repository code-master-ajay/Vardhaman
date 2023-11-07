import React from 'react'
import '../Gallery/gallery.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { IoLocationOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { useForm, ValidationError } from '@formspree/react'


export default function Contact() {

  const [state, handleSubmit] = useForm("xpzgnqeq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }


  return (
    <div >

      <Navbar />
      <div lassName='contact_container'>

        <div className="contact_details">

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>


        </div>

      </div>
      <Footer />
    </div>
  )
}
