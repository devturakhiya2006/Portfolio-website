import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailJS from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJS
      .sendForm(
        "service_na4ybed",
        "template_3yg1w5y",
        form.current,
        "k6ixyeOJnm3AjM5Cg"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message Sent Successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: 'dark'
          });
        },
        (error) => {
          toast.error("Failed to Send Message. Please Try Again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id='contact' className='py-12 px-[7vw] bg-[#050414]'>
      {/* ToastContainer remains for functionality */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        // Increase 'top' from 20px to 80px or 100px to clear the navbar
        style={{ zIndex: 999999, position: 'fixed', top: '80px', right: '20px' }}
      />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium">
          I'd love to hear from you. Reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className='max-w-xl mx-auto bg-[#0a0a1a] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
          <input
            type="email" name="user_email" placeholder='Your Email' required
            className='w-full p-4 rounded-xl bg-[#050414] text-white border border-white/10 focus:outline-none focus:border-blue-600 transition-all'
          />
          <input
            type="text" name="user_name" placeholder='Your Name' required
            className='w-full p-4 rounded-xl bg-[#050414] text-white border border-white/10 focus:outline-none focus:border-blue-600 transition-all'
          />
          <input
            type="text" name="subject" placeholder='Subject' required
            className='w-full p-4 rounded-xl bg-[#050414] text-white border border-white/10 focus:outline-none focus:border-blue-600 transition-all'
          />
          <textarea
            name="message" placeholder='Message' rows={5}
            className='w-full p-4 rounded-xl bg-[#050414] text-white border border-white/10 focus:outline-none focus:border-blue-600 transition-all'
          ></textarea>

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 py-4 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-900/50'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;