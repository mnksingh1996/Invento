import React from "react";

import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Footer from "./layout/footer";

import TopBarComponent from "./components/top-bar";
import CardComponent from "./components/card";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container main">
        <Sidebar />
        <main className="main">
          <TopBarComponent />
          <CardComponent />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
