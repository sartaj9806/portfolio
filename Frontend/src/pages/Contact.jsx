import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message send successfully")
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message, please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 px-4 lg:px-[10vw]">
      <h2 className="text-4xl font-bold text-center text-purple-500 mb-8">Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
        <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded border" />
        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded border" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded border h-40" />
        <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
