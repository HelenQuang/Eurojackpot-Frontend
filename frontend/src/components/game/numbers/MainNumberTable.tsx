import React, { useState } from "react";
import "../../../style/Number.css";

const mainNumberArr = Array.from({ length: 50 }, (_, i) => i + 1);

const MainNumberTable = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="number-box">
      <h5 className="label">Select 5 main numbers</h5>
      <div className="number-grid">
        {mainNumberArr.map((number, index) => (
          <div
            key={`mainNum_${index}`}
            className={`number ${active === number && "active"}`}
            onClick={() => {
              setActive(number);
            }}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNumberTable;
