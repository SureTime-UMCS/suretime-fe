import React from "react";
import axios from "axios";

const ProfileDetails: React.FC<any> = ({ playerId }: any) => {
  const [playerData, setPlayerData] = React.useState<any>();

  const mounted: any = React.useRef();
  React.useEffect(() => {
    if (!mounted.current) {
      getPlayerData(playerId);
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
              <div className="px-5 py-3">Informacje o zawodniku</div>
              <div className="p-4 bg-white">
                <div className="flex-shrink-0 h-60 w-60">
                  <img
                    className="h-60 w-60 rounded-full"
                    src="https://mkszatokabraniewo.pl/wp-content/uploads/2021/03/avatar.jpg"
                    alt=""
                  />
                </div>
                <div className="px-1 py-1">
                  <div className="font-bold py-1">Imię i nazwisko</div>
                  {playerData.firstName
                    ? playerData.firstName
                    : "Nieznane"}{" "}
                  {playerData.secondName ? playerData.secondName : "Nieznane"}
                </div>
                <div className="px-1 py-1">
                  <div className="font-bold py-1">Klub</div>
                  {playerData.club ? playerData.club : "Nieznany"}
                </div>
                <div className="px-1 py-1">
                  <div className="font-bold py-1">Trener</div>
                  {playerData.coach ? playerData.coach : "Nieznany"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileDetails;
