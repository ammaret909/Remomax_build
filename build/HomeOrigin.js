import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ButtonH1 from "../components/ButtonH1";
import ButtonMenu from "../components/ButtonMenu";
import TitleHead from "../components/TitleHead";
export function Home() {
  return (
    <div className=" bg-white">
      <NavBar />

      <div className=" grid grid-cols-12 min-h-screen">
        <div className="hidden sm:block col-span-3 lg:col-span-2 lx:grid rmx_blue">
          <div className="">
            <div className="grid justify-items-center m-1 mt-0 ">
              <select className="btn w-full bg-gray-50 border border-gray-300 text-zinc-600 block text-xs">
                <option selected>Choose a Role</option>
              </select>
            </div>
          </div>
          <div className="border-b-2 m-3"></div>
          <div>
            <div className="menu"></div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-10 w-base-200 rounded-box ">
          <div className="grid grid-cols-1 text-zinc-600 text-sm">
            <TitleHead title="ITEMs ...Main Menu ;" />
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 ounded-box h1">
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
