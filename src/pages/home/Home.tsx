import React from "react";
import Header from "../../components/header/Header";
import { Theme } from "../../interface";

const Home = ({ theme }: Theme) => {
  return (
    <div>
      <Header theme={theme}/>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
