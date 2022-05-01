import React from "react";
import { useParams } from "react-router-dom";
import ProfileDetails from "./elements/ProfileDetails";

const BoxProfile: React.FC<any> = () => {
  const playerId = useParams().player;

  return (
    <div className="flex w-full h-full">
      <ProfileDetails playerId={playerId} />
    </div>
  );
};

export default BoxProfile;
