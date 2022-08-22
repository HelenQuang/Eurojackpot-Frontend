import React from "react";
import "../style/HomePage.css";

import TicketList from "../components/game/tickets/TicketList";
import MainNumberTable from "../components/game/numbers/MainNumberTable";
import StarNumberTable from "../components/game/numbers/StarNumberTable";

const HomePage = () => {
  return (
    <>
      <h2>Basic Game</h2>
      <div className="basic-game">
        <TicketList />
        <div>
          <MainNumberTable />
          <StarNumberTable />
        </div>
      </div>
    </>
  );
};

export default HomePage;
