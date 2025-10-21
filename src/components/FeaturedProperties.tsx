import React, { useState } from 'react';
import {
  Bed,
  Bath,
  Maximize,
  ChevronRight,
  Home,
  X,
  ArrowRight,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedPropertiesProps {
  scrollToContact: () => void;
}

const properties = [
  {
    id: 1,
    title: 'Ngonyama Lifestyle Estate (Stand)',
    location: 'North Riding',
    price: 'R450,000',
    type: 'sale',
    image: '/ngonyama.jpg',
    
    area: '250m²',
    description:
      'Exclusive investment opportunity in our upcoming private estate. Stand prices start at R450,000. Choose from different plans of 3-5 bedroom houses in an upmarket estate.',
  },
  {
    id: 2,
    title: 'Nala Estate',
    location: 'Randfontein Greenhills',
    price: 'R849,000',
    type: ['rent-to-own', 'sale'],
    image: '/bhubesi.jpg',
    beds: 3,
    baths: 2,
    area: '150m²',
    description:
      'Beautiful property available for sale or rent-to-own. Deposit R299,000 with monthly repayments of R7,000.',
  },
  {
    id: 3,
    title: 'P&S Noble Apartments',
    location: 'Randfontein Robinpark',
    price: 'R350,000',
    type: 'sale',
    image: '/p&s.jpg',
    beds: 1,
    baths: 1,
    area: '45m²',
    description:
      'Modern 1-bedroom apartments in the successful P&S Robinpark Estate development.',
  },
  {
    id: 4,
    title: 'P&S Robin Park Estate',
    location: 'Randfontein',
    price: 'R849,000',
    type: 'sale',
    image: '/p&s2.jpg',
    beds: 2,
    baths: 1,
    area: '65m²',
    description:
      'Luxurious 2-bedroom home in our successful P&S Robinpark Estate development. Perfect for families seeking comfort and security.',
  },
  {
    id: 5,
    title: 'Group Buying Opportunity',
    location: 'Randfontein',
    price: 'R147,000 per investor',
    type: 'group',
    image: '/group.jpg',
    properties: 8,
    description:
      'Join our group buying initiative to acquire 8 premium properties. One-time investment of R147,000.',
  },
];

const PropertyCard: React.FC<{
  property: any;
  onImageClick: (image: string, title: string) => void;
  scrollToContact: () => void;
  index: number;
}> = ({ property, onImageClick, scrollToContact, index }) => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${property.title} at ${property.price}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/27792758821?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={() => onImageClick(property.image, property.title)}
        />
        {Array.isArray(property.type) ? (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-col sm:flex-row gap-2">
            <div className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              For Sale
            </div>
            <div className="bg-green-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
              Rent to Own
            </div>
          </div>
        ) : (
          property.type === 'rent-to-own' && (
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
              Rent to Own
            </div>
          )
        )}
        {property.type === 'group' && (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
            Group Buying
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3 flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 line-clamp-2">
            {property.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
            <p className="text-gray-600 flex items-center text-sm sm:text-base">
              <MapPin size={16} className="mr-1 text-blue-600 flex-shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </p>
            <p className="text-lg sm:text-xl font-bold text-blue-600 whitespace-nowrap">{property.price}</p>
          </div>

          <p className="text-gray-700 mb-4 text-sm sm:text-base line-clamp-3">{property.description}</p>
        </div>

        {property.type !== 'group' ? (
          <div className="flex justify-around sm:justify-between text-gray-600 text-sm sm:text-base border-t pt-3">
            <div className="flex items-center">
              <Bed size={16} className="sm:w-[18px] sm:h-[18px] mr-1 text-blue-600" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="sm:w-[18px] sm:h-[18px] mr-1 text-blue-600" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Maximize size={16} className="sm:w-[18px] sm:h-[18px] mr-1 text-blue-600" />
              <span>{property.area}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center text-gray-600 border-t pt-3 text-sm sm:text-base">
            <div className="flex items-center">
              <Home size={16} className="sm:w-[18px] sm:h-[18px] mr-1 text-blue-600" />
              <span>{property.properties} Properties</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  scrollToContact,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const filteredProperties =
    activeTab === 'all'
      ? properties
      : properties.filter((property) => {
          if (Array.isArray(property.type)) {
            return property.type.includes(activeTab);
          }
          return property.type === activeTab;
        });

  const handleImageClick = (url: string, title: string) => {
    setPreviewImage({ url, title });
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exclusive properties and investment opportunities in prime locations
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8 overflow-x-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex rounded-lg shadow-md flex-nowrap" role="group">
            <button
              type="button"
              className={`px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-l-lg whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('all')}
            >
              All Properties
            </button>
            <button
              type="button"
              className={`px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap ${
                activeTab === 'sale'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('sale')}
            >
              For Sale
            </button>
            <button
              type="button"
              className={`px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap ${
                activeTab === 'rent-to-own'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('rent-to-own')}
            >
              Rent to Own
            </button>
            <button
              type="button"
              className={`px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-r-lg whitespace-nowrap ${
                activeTab === 'group'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('group')}
            >
              Group Buying
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onImageClick={handleImageClick}
              scrollToContact={scrollToContact}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            View All Properties
            <ChevronRight
              size={16}
              className="ml-1 group-hover:ml-2 transition-all"
            />
          </motion.a>
        </div>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20 flex items-center justify-center"
              onClick={() => setPreviewImage(null)}
              aria-label="Close preview"
            >
              <X size={24} className="text-gray-800 hover:text-blue-600" />
            </button>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-full">
              <div className="overflow-auto flex-shrink">
                <img
                  src={previewImage.url}
                  alt={previewImage.title}
                  className="w-full h-auto object-contain max-h-[60vh] sm:max-h-[70vh]"
                />
              </div>

              <div className="bg-white p-4 sm:p-6 border-t flex-shrink-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2 sm:mb-3">
                  {previewImage.title}
                </h3>
                <button
                  className="text-sm sm:text-base text-blue-600 hover:text-blue-800 flex items-center font-medium transition-colors"
                  onClick={() => {
                    setPreviewImage(null);
                    scrollToContact();
                  }}
                >
                  Enquire about this property
                  <ArrowRight size={16} className="sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProperties;