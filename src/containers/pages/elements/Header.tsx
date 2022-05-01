import React from "react";
import { Link } from "react-router-dom";

import { getCookies } from "../../../utils/cookies";

const Header: React.FC<any> = (): JSX.Element | null => {
  const [logged, setLogged] = React.useState(!!getCookies().get("accessToken"));

  React.useEffect(() => {
    getCookies().addChangeListener(onCookieChange);
  });

  const onCookieChange = () => {
    setLogged(!!getCookies().get("accessToken"));
  };

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
            {logged ? (
              <Link to="/">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 p-1 rounded-[50%]"
                    src="https://mkszatokabraniewo.pl/wp-content/uploads/2021/03/avatar.jpg"
                    alt="logo"
                  />
                  <div className="m-2 text-lg">Przemysław Sałek</div>
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <div className="flex items-center">
                  <div className="m-2 text-lg">Zaloguj się</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
