import React, { useEffect } from 'react';

const LocationNotification = () => {
  useEffect(() => {
    // Check the current permission status
    if (Notification.permission === 'default') {
      // Request permission to show notifications
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // If granted, show the custom notification
          showNotification();
        } else {
          console.log('Notification permission denied');
          alert("Notifications are blocked. Please enable them to access this feature.");
        }
      });
    } else if (Notification.permission === 'granted') {
      // Permission was already granted, show the custom notification
      showNotification();
    } else {
      console.log('Notifications are blocked. Please enable them to access this feature.');
    }
  }, []);

  const showNotification = () => {
    const notification = new Notification('Location Access Required', {
      body: 'Click to allow access to your location to get vacant houses near you!.',
      icon: '/logo.png',
      tag: 'location-request',
    });

    notification.onclick = () => {
      console.log('Notification clicked');
      requestLocationAccess();
    };
  };

  const requestLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return <div></div>;
};

export default LocationNotification;
