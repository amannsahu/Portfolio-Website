import React, { useState } from 'react';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {

  const [formData, setformData] = useState({email:"", subject:"", message:""});
  const [isSent, setIsSent] = useState(false);

  function changeHandler(event){
    setformData((prevData) => (
     {
        ...prevData,
        [event.target.name]:event.target.value
     }
    ))
  }

  function sendEmail(event) {
    event.preventDefault();

    emailjs.send(
      'service_gq2pg0d', // Replace with your EmailJS service ID
      'template_400b485', // Replace with your EmailJS template ID
      {
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'koyusmiX3m5dJAzS6' // Replace with your EmailJS user ID
    )
    .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsSent(true);
        setformData({ email: "", subject: "", message: "" }); // Clear form after sending
    }, (error) => {
        console.log('Failed to send email.', error.text);
    });
  }

  return (
    <div className='flex flex-col gap-10 mt-28 lg:flex-row lg:justify-evenly' id='contact'>
      <div className='text-left flex flex-col gap-3 ml-10'>
        <h1 className='text-white-100 text-2xl font-semibold'>Let's Connect</h1>
        <p className='text-white-100 text-lg'>I'd love to hear from you! Whether you have a project in mind, <br/> a question, 
            or just want to say hello, feel free to get in touch.
        </p>
        <div className='flex items-center gap-4 text-4xl text-white-100'>
            <a href="https://github.com/amannsahu"><VscGithub/></a>
            <a href="https://shorturl.at/GBIMC"><FaLinkedin /></a>
        </div>
      </div>

      <div className='w-1/2 ml-10 lg:ml-0'>
        {isSent && <p className="text-green-500 font-semibold">Message sent successfully!</p>}
        <form className='flex flex-col gap-3 mb-20 lg:gap-6' onSubmit={sendEmail}>
          <label className='space-y-2'>
            <p className='text-white-100 font-medium text-left'>Your Email</p>
            <input
            type='email'
            value={formData.email}
            placeholder="jacob@gmail.com"
            onChange={changeHandler}
            name='email'
            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>

          <label className='space-y-2'>
            <p className='text-white-100 font-medium text-left'>Subject</p>
            <input
            type='text'
            value={formData.subject}
            placeholder="Just saying hi"
            onChange={changeHandler}
            name='subject'
            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>

          <label className='space-y-2'>
            <p className='text-white-100 font-medium text-left'>Message</p>
            <input
            type='textarea'
            value={formData.message}
            placeholder="Let's talk about..."
            onChange={changeHandler}
            name='message'
            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
          <br/>
          <button type='submit' className='bg-violet-600 py-2 rounded-xl text-white font-semibold'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
