import React from "react";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img
        className="emoji"
        src="https://em-content.zobj.net/source/apple/81/confused-face_1f615.png"
        alt="emoji"
      />
      <p className="not-found-text">
        Sorry pal, product you are looking for is not available...
      </p>
    </div>
  );
}

export default NotFound;
