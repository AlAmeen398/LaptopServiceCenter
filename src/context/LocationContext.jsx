import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const serviceCenters = {
    Ernakulam: 'MG Road, Near Metro Station',
    Trivandrum: 'Technopark Campus',
    Kollam: 'Downtown Complex, Beach Road',
    Calicut: 'Palayam Junction, Opp. KSRTC Bus Stand',
    Trissur: 'Swaraj Round East, 2nd Floor, City Center',
    Kottayam: 'Kanjikuzhy Main Road, Near Private Bus Stand',
    Idukki: 'Painavu Town, Near Govt. Hospital',
  };

  const selectDistrict = (district) => {
    setSelectedDistrict(district);
    setSelectedLocation(`ChipFix service center available in ${district}: ${serviceCenters[district]}`);
  };

  const clearLocation = () => {
    setSelectedDistrict('');
    setSelectedLocation('');
  };

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        selectedDistrict,
        serviceCenters,
        selectDistrict,
        clearLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
