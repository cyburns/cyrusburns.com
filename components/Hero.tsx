"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] min-w-[270px]">
        <div className="-space-y-2">
          <div className="flex justify-between">
            <p>CYRUS BURNS</p>
            <div className="h-[1em] w-[1em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <path
                  fill="#fff"
                  stroke="#000"
                  strokeWidth=".3"
                  d="m9.145 7.98 3.069 4.394-2.019 1.415-3.07-4.638-.124-.188-.126.188-3.07 4.589-2.02-1.415 3.021-4.346.116-.167-.193-.061-4.54-1.444.745-2.341L5.57 5.602l.2.071V.15H8.18v5.522l.2-.07 4.685-1.636.745 2.34-4.588 1.445-.195.06.117.168Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex justify-between">
            <p>DESIGNER</p>
            <p>AND</p>
            <p>DEVELOPER</p>
          </div>

          <div className="flex justify-between">
            <p>07.04</p>
            <p>—</p>
            <p> SELECTED WORKS</p>
          </div>
        </div>

        <div className="flex space-x-4 justify-between mt-10">
          <p>INFO</p>
          <p>CONTACT</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
