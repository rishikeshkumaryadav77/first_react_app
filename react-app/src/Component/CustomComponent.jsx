import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus"; // Adjust the path as needed

const CustomComponent = () => {
  const isOnline = useOnlineStatus(); // ✅ Call the hook, don't render it as JSX

  return (
    <div>
  <h1>{isOnline ? "Online" : "OOPS!!!! OU ARE OFFLINE"}</h1>
</div>
);
};

export default CustomComponent;
