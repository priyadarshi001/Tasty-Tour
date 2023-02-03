// check whether user is online or not

import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
   const handleOnline = () => {
    setIsOnline(true);
   }

   const handleOffline = () => {
     setIsOnline(false);
   };

    window.addEventListener("online", handleOnline); // JS method
    window.addEventListener("offline", handleOffline);

    return () => { // unmounting
     window.removeEventListener("online", handleOnline);
     window.removeEventListener("offline", handleOffline);
    }
  }, []);
  // returns true/false based on internet connection
  return isOnline;
};

export default useOnline;
