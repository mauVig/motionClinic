import React from 'react';
import { useStore } from "@/store/storeGlobal.ts";


const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const yearString = year.toString();
  const formattedYear = yearString.slice(0, 2) + ' ' + yearString.slice(2);
  const { myFocus } = useStore();

  return (
    <footer
      id="myFooter"
      className="bg-black bg-[radial-gradient(ellipse_60%_90%_at_90%_10%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-grey pt-32 px-6 pb-6"
    >
      <div className="grid mid:grid-cols-2 lx:grid-cols-4 gap-y-12 xl:gap-y-0 ">
        <img src='/svg/logo.svg' alt="Logo de Motion Clinic" className="w-[300px]" />
        <div className="flex mid:justify-center">
          <div className="text-xs flex justify-between w-28">
            <span>BS AS</span>
            <span>{formattedYear}</span>
          </div>
        </div>
        <div className="flex justify-between w-44">
          <div className="flex items-end text-sm">
            <a href="#">Linkedin</a>
          </div>
          <div className="flex items-end text-sm">
            <a href="#">Instagram</a>
          </div>
        </div>
        <div>
          <button className="px-8 xl:px-24 py-2 bg-grey text-black rounded-full text-2xl truncate buttom" onClick={myFocus}>LET´S TALK</button>
        </div>
      </div>
      <style >{`
        .buttom {
          box-shadow: inset -1px 2px 5px 5px rgba(0, 0, 0, 0.45);
          transition: all 0.8s;
        }
        .buttom:hover {
          box-shadow: inset -1px 2px 5px 5px rgba(0, 0, 0, 0.3);
          background: #b1b1db;
        }
        .buttom:active {
          box-shadow: inset -2px 3px 6px 6px rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </footer>
  );
};

export default Footer;