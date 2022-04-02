import React from "react";

const Footer: React.FC<any> = (): JSX.Element | null => {
  return (
    <footer className="flex justify-between	items-center bg-white shadow px-3">
      <a target="_blank" href="https://github.com/SureTime-UMCS">
        <div className="flex items-center">
          <img
            className="h-50 w-20 p-1"
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
            alt="logo"
          />
        </div>
      </a>
      <div>2022 © SKE Project</div>
    </footer>
  );
};

export default Footer;
