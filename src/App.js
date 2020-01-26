import React from "react";

import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Footer from "./layout/footer";

import TopBarComponent from "./components/top-bar";
import CardComponent from "./components/card";

import Img1 from "./assets/card/img1.png";
import Img2 from "./assets/card/img2.png";
import Img3 from "./assets/card/img3.png";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container main">
        <Sidebar />
        <main className="main">
          <TopBarComponent />
          <div className="flex__between">
            <CardComponent img_src={Img1} />
            <CardComponent img_src={Img2} />
            <CardComponent img_src={Img3} />
          </div>

          <div className="load__more">
            <button className="btn white">Load more</button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
