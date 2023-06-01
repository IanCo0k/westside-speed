import React from 'react';
import fitpit from '../assets/fitpit.jpeg';
import topnotch from '../assets/topnotch.jpeg';
import other from '../assets/other.jpg';

const Locations = () => {
  const locations = [
    {
      name: 'The Fit Pit',
      image: fitpit, // Replace with actual image path for The Fit Pit
      description: 'From time to time, we will train at The Fit Pit, located in Rockford, Michigan.',
      finePrint: 'Rockford, Michigan',
      facebookLink: 'https://www.facebook.com/Thefitpit1/',
      websiteLink: 'https://thefitpit.net/yoga-1',
    },
    {
      name: 'Top Notch Studio',
      image: topnotch, // Replace with actual image path for Top Notch Studio
      description: 'Top Notch Studio is a great place with amazing facilities. Our friends at this studio have kindly allowed us to use their space from time to time!',
      finePrint: '8450 Algoma Ave NE STE A, Rockford, MI 49341',
      websiteLink: 'http://topnotch.studio/',
    },
    {
      name: 'Other',
      image: other, // Replace with actual image path for Other
      description: 'Especially when the weather is nice, we sometimes go to football fields around the area to train.',
      finePrint: 'Within a 10-mile radius of Rockford, Michigan',
    },
  ];

  return (
    <section id='locations-section' className="main-bg py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold mb-6">Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-gray-800 text-white rounded-lg p-4">
              {location.image && (
                <img src={location.image} alt={location.name} className="mb-4 rounded-lg" />
              )}
              <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
              <p className="text-lg mb-2">{location.description}</p>
              {location.finePrint && (
                <p className="text-sm text-gray-400 mb-2">{location.finePrint}</p>
              )}
              {location.websiteLink && (
                <div>
                  <a
                    href={location.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Website
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
