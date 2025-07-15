import React from "react";
import { Header, Footer } from "../../components";

function Userlayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="w-full h-full bg-amber-200">Main Content</div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Userlayout;
