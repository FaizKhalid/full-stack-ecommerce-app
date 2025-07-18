import React, { useRef, useState, useEffect } from "react";
import { Header, Footer } from "../../components";
import { Outlet } from "react-router-dom";

function Userlayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Userlayout;
