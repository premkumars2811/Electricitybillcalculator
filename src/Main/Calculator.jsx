import React, { useState } from "react";

const Calculator = () => {
  const [pre, setPre] = useState(null);
  const [cur, setCur] = useState(null);
  const [bill, setBill] = useState(null);

  const handleClear = () => {
    setCur(null);
    setPre(null);
    setBill(null);
  };

  const handleCalculate = () => {
    if (pre === null || cur === null) {
      return alert("Please enter both previous and current readings.");
    }
    if (pre > cur) {
      return alert("Previous unit must be smaller than current unit.");
    }
    let units = cur - pre;
    if (units <= 100) {
      setBill("Bill not generated for consumption up to 100 units.");
      return;
    }
    let cost = 0;
    if (units <= 500) {
      if (units > 400) cost += (units - 400) * 6;
      if (units > 200) cost += (Math.min(units, 400) - 200) * 4.5;
      if (units > 100) cost += (Math.min(units, 200) - 100) * 2.25;
    } else {
      if (units > 1000) cost += (units - 1000) * 11;
      if (units > 800) cost += (Math.min(units, 1000) - 800) * 10;
      if (units > 600) cost += (Math.min(units, 800) - 600) * 9;
      if (units > 500) cost += (Math.min(units, 600) - 500) * 8;
      cost += (Math.min(units, 500) - 400) * 6;
      cost += (Math.min(units, 400) - 100) * 4.5;
    }
    setBill(cost);
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator__about">
          <h1 className="title-text">Electricity Bill Calculator</h1>
          <p style={{ textAlign: "center" }} className="sub-text">
            Use our interactive electricity bill calculator to get an accurate
            estimate of your monthly electricity costs. Simply input your usage
            details, and our calculator will do the rest. This tool helps you
            understand where your money is going and how you can start saving.
          </p>
        </div>
        <div className="calculator__inner">
          <div className="">
            <div className="calculator__inner__box">
              <h2 className="sub-b-text" style={{ textAlign: "center" }}>
                EB Calculator
              </h2>
              <input
                type="number"
                value={pre !== null ? pre : ""}
                onChange={(e) => setPre(Number(e.target.value))}
                placeholder="Previous Reading"
                className="cal-input"
              />
              <input
                type="number"
                value={cur !== null ? cur : ""}
                onChange={(e) => setCur(Number(e.target.value))}
                placeholder="Current Reading"
                className="cal-input"
              />
              <button className="cal-sub-but" onClick={handleCalculate}>
                Calculate
              </button>
              <button className="cal-clear-but" onClick={handleClear}>
                Clear
              </button>
              <div>
                {bill !== null && (
                  <p>
                    Total Electricity Bill:{" "}
                    {typeof bill === "string" ? bill : `₹${bill.toFixed(2)}`}
                  </p>
                )}
              </div>
            </div>

            <div className="cal-guide mt-3">
              <h3 className="sub-b-text">Guidelines</h3>
              <ul>
                <li>Put last month's reading as the previous reading.</li>
                <li>
                  Check the current reading on your meter and put it in the
                  current reading.
                </li>
                <li>This will only calculate for home use.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
