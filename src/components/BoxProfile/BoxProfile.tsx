import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BoxProfile: React.FC<any> = () => {
  const [playerData, setPlayerData] = React.useState<any>();

  const playerParam = useParams().player;
  const mounted: any = React.useRef();
  React.useEffect(() => {
    if (!mounted.current) {
      getPlayerData(playerParam);
      mounted.current = true;
    } else {
      // componentDidUpdate
    }
  });

  const getPlayerData = (player: any) => {
    axios
      .get(`/api/v1/persons/${player}`)
      .then((res) => setPlayerData(res.data))
      .catch((err) => console.log(err));
  };

  console.log(playerData);

  return (
    playerData && (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="px-2 py-3">
                {playerData.firstName ? playerData.firstName : "Nieznane"}{" "}
                {playerData.secondName ? playerData.secondName : "Nieznane"}
              </div>
              <div className="p-4 bg-white">
                <div className="flex-shrink-0 h-60 w-60">
                  <img
                    className="h-60 w-60 rounded-full"
                    src="https://mkszatokabraniewo.pl/wp-content/uploads/2021/03/avatar.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BoxProfile;
