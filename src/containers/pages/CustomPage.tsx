import React from "react";

import Header from "./elements/Header";
import Main from "./elements/Main";
import Footer from "./elements/Footer";

const CustomPage: React.FC<any> = ({ title, box }: any): JSX.Element | null => {
  React.useEffect(() => {
    document.title = `${title} - SureTime`;
  });

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] overflow-y-auto">
      <Header />
      <Main box={box} />
      <Footer />
    </div>
  );
};

export default CustomPage;
