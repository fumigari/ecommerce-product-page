import React from "react";
import NotFoundImage from "../../images/not-found.svg";
import "./index.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <img src={NotFoundImage} alt="page not found" />
    </div>
  );
};

export default NotFound;
