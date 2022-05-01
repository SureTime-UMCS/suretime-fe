import React from "react";

import BoxPlayersList from "../../components/BoxPlayersList/BoxPlayersList";

const MainPage: React.FC<any> = ({ title, box }: any): JSX.Element | null => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} - SureTime`;
    } else {
      document.title = `Witamy! - SureTime`;
    }
  });

  return (
    <div className="flex flex-col w-full h-full">
      <BoxPlayersList />
    </div>
  );
};

export default MainPage;
