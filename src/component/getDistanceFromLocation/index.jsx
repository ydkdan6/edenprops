import React, { useEffect } from 'react';

const LocationNotification = () => {
  useEffect(() => {
    // Request permission for notifications on component mount
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          showNotification();
        }
      });
    } else if (Notification.permission === 'granted') {
      showNotification();
    }
  }, []);

  const showNotification = () => {
    const notification = new Notification('Location Access Required', {
      body: 'Please allow location access to provide a better experience.',
      icon: '/location-icon.png', // Add an icon to the notification
      tag: 'location-request', // Assign a tag to avoid duplicate notifications
    });

    // Handle click event on the notification
    notification.onclick = () => {
      console.log('Notification clicked');
      //  navigate the user to a specific page or handle other actions here
    };
  };

  return <div></div>; // The component does not render anything visible
};

export default LocationNotification;
