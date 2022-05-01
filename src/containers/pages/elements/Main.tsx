import React from "react";

const Main: React.FC<any> = ({ box }: any): JSX.Element | null => {
  const Box = box;

  return box ? (
    <main className="bg-gray-100 h-full w-full overflow-y-auto">
      <div className="flex h-full w-full p-5 justify-center items-center overflow-x-hidden">
        <Box />
      </div>
    </main>
  ) : (
    <main className="h-full w-full">
      <div>Brak boxa!</div>
    </main>
  );
};

export default Main;
