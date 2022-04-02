import React from "react";

const Main: React.FC<any> = ({ box }: any): JSX.Element | null => {
  const Box = box;

  return box ? (
    <main className="h-full w-full">
      <Box />
    </main>
  ) : (
    <main className="h-full w-full">
      <div>Brak boxa!</div>
    </main>
  );
};

export default Main;
