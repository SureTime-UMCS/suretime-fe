import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC<any> = (): JSX.Element | null => {
  return (
    <header>
      <nav className="bg-white shadow">
        <div className="px-8 py-2">
          <div className="flex justify-between">
            <Link to="/">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 p-1"
                  src="https://cdn3.iconfinder.com/data/icons/round-icons-vol-1-2/120/run-512.png"
                  alt="logo"
                />
                <div className="m-2 text-lg">SureTime</div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
