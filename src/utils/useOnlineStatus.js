import { useEffect,useState } from "react";

const useOnlineStatus = () => {
  //checking if they r online
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus; //boolean value
};

export default useOnlineStatus;
