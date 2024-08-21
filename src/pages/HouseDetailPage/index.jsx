import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaPhone, FaCommentDots, FaCheck } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

const similarProperties = [
  {
    id: 4,
    image: '/housecard1.jpg',
    title: 'Apartment for Office or Residential in VI',
    description: '3 Bedrooms flat with swimming pool...',
    features: ['24/7 Security'],
  },
  {
    id: 5,
    image: '/housecard2.jpg',
    title: 'SIX BEDROOM DUPLEX FOR SALE',
    description: 'Newly built and furnished six bedroom duplex...',
  },
  // more similar properties 
];

const HouseDetailPage = () => {
  const { id } = useParams(); // Get the house ID from the URL parameters
  const location = useLocation();

  const houses = [
    {
      id: 1,
      title: "Luxury Apartment in the Heart of the City",
      imageSrcs: [
        "/housecard.jpg",
        "/housecard.jpg",
        "/housecard.jpg"
      ],
      description: "A luxurious apartment with all the amenities you need.",
      brief: "This is a stunning 3-bedroom apartment located in the heart of the city, offering breathtaking views and modern amenities.",
      bedrooms: 3,
      bathrooms: 2,
      price: 300000,
      space: "1200 sqft",
      location: "Downtown",
      electricity: true,
      features: ["Swimming Pool", "Gym", "24/7 Security"],
    },
    // Add more house objects here
  ];

  // Use data from the state if available, otherwise find by ID
  const house = location.state || houses.find(h => h.id === parseInt(id));

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-10 md:w-screen mt-[80px]">
        <div className="container mx-auto px-4">
          {/* House Images Carousel */}
          <div className="mb-8">
            {house.imageSrcs && house.imageSrcs.length > 0 ? (
              <Carousel
                showThumbs={true}
                autoPlay
                infiniteLoop
                dynamicHeight={true}
                showArrows={true}
              >
                {house.imageSrcs.map((imageSrc, index) => (
                  <div key={index}>
                    <img src={imageSrc} alt={`${house.title} image ${index + 1}`} className="w-full h-80 object-cover rounded-lg shadow-lg" />
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No images available</p> // Fallback if there are no images
            )}
          </div>

          {/* House Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{house.title}</h1>

          {/* House Description */}
          <p className="text-lg text-gray-700 mb-6">{house.description}</p>

          {/* Brief Paragraph about the House */}
          <p className="text-lg text-gray-600 mb-4 italic">{house.brief}</p>

          {/* House Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">Bedrooms</h2>
              <p className="text-gray-700">{house.bedrooms}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">Bathrooms</h2>
              <p className="text-gray-700">{house.bathrooms}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">Price</h2>
              <p className="text-gray-700">#{house.price}/year</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">Space</h2>
              <p className="text-gray-700">{house.space}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">Location</h2>
              <p className="text-gray-700">{house.location}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800">Electricity</h2>
              <p className="text-gray-700">
                {house.electricity ? '24/7 Electricity' : 'No Electricity'}
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
            <div className="flex flex-wrap space-x-4">
              {(house.features || []).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Properties Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map(property => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                    <p className="text-gray-600 text-sm">{property.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leave a Reply Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave a Reply</h2>
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-lg"
              placeholder="Your comment..."
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HouseDetailPage;
