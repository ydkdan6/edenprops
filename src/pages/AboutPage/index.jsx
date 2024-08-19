import React from "react";
import Image from "../../utils/Image";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      {/* Company Overview Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mt-[80px] underline">About Our Company</h1>
        <p className="mt-4 text-lg text-gray-600">
          We are dedicated to providing the best rental services for homes. With years of experience in the industry,
          we have built a reputation for excellence and reliability.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 underline">What We Do</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our company specializes in renting houses that cater to all needs. Whether you are looking for a cozy cottage or a luxurious villa,
          we have something for everyone.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/housecard1.jpg" alt="House" className="w-full h-40 object-cover rounded-t-lg transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Cozy Cottages</h3>
            <p className="mt-2 text-gray-600">
              Perfect for a small family or a couple, our cottages offer the perfect blend of comfort and affordability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/housecard2.jpg" alt="House" className="w-full h-40 object-cover rounded-t-lg transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Modern Villas</h3>
            <p className="mt-2 text-gray-600">
              Experience luxury living with our range of modern villas, fully equipped with all the latest amenities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/housecard.jpg" alt="House" className="w-full h-40 object-cover rounded-t-lg transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Family Homes</h3>
            <p className="mt-2 text-gray-600">
              Spacious and comfortable, our family homes are ideal for larger families looking for a place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 underline">Our Awards</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-500">Best Rental Service 2022</h3>
            <p className="mt-2 text-gray-600">Awarded by the National Real Estate Association for excellence in customer service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-500">Top Property Management 2021</h3>
            <p className="mt-2 text-gray-600">Recognized as the top property management company in the region.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-500">Customer Choice Award 2020</h3>
            <p className="mt-2 text-gray-600">Voted by our clients as the best rental company for three consecutive years.</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-16 text-center bg-orange-500 py-12 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-white">500+</h3>
            <p className="mt-2 text-lg text-white">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white">300+</h3>
            <p className="mt-2 text-lg text-white">Houses Rented</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white">20</h3>
            <p className="mt-2 text-lg text-white">Awards Won</p>
          </div>
        </div>
      </section>
    </div>
            <Footer />
        </div>
    );
};

export default AboutUs;