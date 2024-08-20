import React from "react";
import { FaHome, FaBuilding, FaUserShield, FaMoneyCheck } from "react-icons/fa";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const services = [
  {
    icon: <FaHome size={40} className="text-orange-500" />,
    title: "House Rentals",
    description: "We provide a wide range of rental properties to fit every budget and lifestyle.",
  },
  {
    icon: <FaBuilding size={40} className="text-orange-500" />,
    title: "Property Management",
    description: "Comprehensive management services for property owners, including maintenance and tenant relations.",
  },
  {
    icon: <FaUserShield size={40} className="text-orange-500" />,
    title: "Security Services",
    description: "Ensure the safety of your property with our professional security services.",
  },
  {
    icon: <FaMoneyCheck size={40} className="text-orange-500" />,
    title: "Financial Consulting",
    description: "Expert advice on property investments, mortgages, and financial planning.",
  },
];

const ServicesPage = () => {
  return (
    <div>
        <Header />
    <div className="bg-gray-100 py-12 mt-[70px]">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a range of services to meet all your real estate needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ServicesPage;
