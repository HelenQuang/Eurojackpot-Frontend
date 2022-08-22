import React, { useState } from "react";

const starNumberArr = Array.from({ length: 12 }, (_, i) => i + 1);

const StarNumberTable = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="number-box">
      <h5 className="label">Select 2 star numbers</h5>
      <div className="number-grid">
        {starNumberArr.map((number, index) => (
          <div
            key={`starNum_${index}`}
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

export default StarNumberTable;
