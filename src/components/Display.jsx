import { Outlet } from "react-router-dom";
import React from "react";

import Navbar from "./utils/navbar/Navbar.jsx";

export default function Display() {
  return (
    <div className="font-chivo bg-black min-h-screen h-fit w-screen">
      <Navbar />
      <div className="text-white">
        <Outlet />
      </div>
    </div>
  );
}
