import React from "react";
import { Link } from "react-router-dom";

const BoxImage: React.FC<any> = () => {
  return (
    <Link to="/login">
      <img
        src="https://login.umcs.pl/images/logo-eba5ed0afdc6c6e78149cb578c12ec68.png"
        alt="UMCS"
        height="105"
        width="300"
        className="mx-auto cursor-pointer"
      />
    </Link>
  );
};

export default BoxImage;
