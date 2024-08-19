import React from 'react';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

const ContactUs = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We would love to hear from you! Reach out to us through the form below or via our social media channels.
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="mailto:danielgodwin713@gmail.com" 
          method="POST"
          className="mt-8 space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="py-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="py-2">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Other Contact Options */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20.52 3.48C18.6 1.56 16.1.5 13.5.5c-5.56 0-10.1 4.54-10.1 10.1 0 1.78.5 3.54 1.38 5.04L2.3 20.5c-.12.3-.06.66.16.9.2.26.5.42.82.42.16 0 .3-.04.46-.12l4.86-2.36c1.48.78 3.14 1.18 4.8 1.18 5.56 0 10.1-4.54 10.1-10.1 0-2.6-1.06-5.1-2.98-7.02zm-7.02 15.64c-1.46 0-2.86-.36-4.12-1.04l-.3-.18-3.02 1.48 1.08-3.02-.2-.3c-.84-1.44-1.28-3.06-1.28-4.72 0-4.8 3.9-8.7 8.7-8.7 2.34 0 4.5.9 6.14 2.54 1.64 1.62 2.54 3.8 2.54 6.14 0 4.8-3.9 8.7-8.7 8.7zm4.86-6.92c-.26-.12-1.52-.74-1.76-.82-.24-.1-.42-.12-.6.12-.18.24-.7.82-.86.98-.16.18-.32.2-.58.08-.26-.12-1.12-.4-2.14-1.34-.78-.72-1.3-1.6-1.46-1.88-.16-.26-.02-.4.1-.52.1-.1.26-.3.38-.46.14-.18.2-.26.3-.44.1-.18.06-.34-.02-.48-.08-.14-.68-1.62-.92-2.14-.24-.58-.5-.5-.68-.5-.18 0-.38 0-.58.02-.18.02-.46.06-.7.32-.24.24-.94.92-.94 2.22 0 1.3 1 2.56 1.12 2.74.14.18 2 3.02 4.76 4.14.66.26 1.18.4 1.58.52.66.2 1.26.18 1.72.12.52-.08 1.52-.62 1.74-1.22.22-.6.22-1.12.16-1.22-.04-.1-.24-.16-.48-.26z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/yourfacebookpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.06 3.74 9.27 8.5 9.93v-7.04H8.7V12h1.8v-1.43c0-1.78 1.07-2.76 2.66-2.76.76 0 1.41.06 1.6.08v1.86h-1.12c-.88 0-1.06.42-1.06 1.04V12h2.1l-.28 2.89h-1.82v7.04C18.26 21.27 22 17.06 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/yourinstagramprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 2.16c3.18 0 3.582.012 4.849.07 1.366.062 2.633.37 3.608 1.345.975.975 1.283 2.242 1.345 3.608.058 1.267.07 1.668.07 4.846s-.012 3.578-.07 4.845c-.062 1.366-.37 2.633-1.345 3.608-.975.975-2.242 1.283-3.608 1.345-1.267.058-1.668.07-4.849.07s-3.582-.012-4.849-.07c-1.366-.062-2.633-.37-3.608-1.345-.975-.975-1.283-2.242-1.345-3.608-.058-1.267-.07-1.668-.07-4.845s.012-3.578.07-4.846c.062-1.366.37-2.633 1.345-3.608.975-.975 2.242-1.283 3.608-1.345C8.418 2.172 8.818 2.16 12 2.16zm0-2.16C8.756 0 8.332.01 7.05.068 5.734.126 4.473.47 3.458 1.484 2.443 2.498 2.099 3.759 2.041 5.075c-.058 1.282-.068 1.706-.068 4.95s.01 3.668.068 4.95c.058 1.316.402 2.577 1.417 3.592 1.015 1.015 2.276 1.359 3.592 1.417 1.282.058 1.706.068 4.95.068s3.668-.01 4.95-.068c1.316-.058 2.577-.402 3.592-1.417 1.015-1.015 1.359-2.276 1.417-3.592.058-1.282.068-1.706.068-4.95s-.01-3.668-.068-4.95c-.058-1.316-.402-2.577-1.417-3.592-1.015-1.015-2.276-1.359-3.592-1.417C15.668.01 15.244 0 12 0zM12 5.838a6.16 6.16 0 100 12.324 6.16 6.16 0 000-12.324zm0 10.324a4.164 4.164 0 110-8.328 4.164 4.164 0 010 8.328zm6.406-11.624a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
            <Footer />
        </div>
    );
};

export default ContactUs;