import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BoxPlayersList: React.FC<any> = () => {
  const [players, setPlayers] = React.useState([]);

  const mounted: any = React.useRef();
  React.useEffect(() => {
    if (!mounted.current) {
      getPlayers();
      mounted.current = true;
    } else {
      // componentDidUpdate
    }
  });

  console.log(players);

  const getPlayers = () => {
    axios
      .get("/api/v1/persons")
      .then((res) => setPlayers(res.data.content))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col">
      {players?.length > 0 && (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Imię i nazwisko
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Płeć
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Klub
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Trener
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Profil</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {players.map((player: any) => (
                    <tr key={player.userUUID}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://mkszatokabraniewo.pl/wp-content/uploads/2021/03/avatar.jpg"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {player.firstName ? player.firstName : "Nieznane"}{" "}
                              {player.secondName
                                ? player.secondName
                                : "Nieznane"}
                            </div>
                            <div className="text-sm text-gray-500">
                              {player.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {player.gender ? player.gender : "Nieznana"}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {player.club ? player.club : "Nieznany"}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {player.coach ? player.coach : "Nieznany"}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-blue-500 font-medium">
                        <Link
                          to={`/profile/${encodeURIComponent(player?.userUUID)}`}
                        >
                          Zobacz profil
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxPlayersList;
