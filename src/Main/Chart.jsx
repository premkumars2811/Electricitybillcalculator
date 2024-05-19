import React from "react";

const Chart = () => {
  return (
    <>
      <div className="chart p-3">
        <div className="chart-inner">
          <h1 className="title-text ">Electricity Unit Per Rate Table</h1>
          <p style={{ textAlign: "center" }} className="sub-text">
            Our detailed electricity unit per rate table breaks down the cost
            per unit of electricity. This table is a valuable resource to see
            how much you’re paying for each unit and identify opportunities for
            savings.
          </p>
        </div>

        <div className="chart-box">
          <div className="chart-box__inner">
            <table>
              <thead>
                <tr>
                  <th
                    colspan="2"
                    className="sub-b-text"
                    style={{ borderBottom: "2px solid rgb(211, 211, 211)" }}
                  >
                    Consumption up to 500 units
                  </th>
                </tr>
                <tr>
                  <th className="sub-b-text">Units</th>
                  <th className="sub-b-text">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0-100</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>101-200</td>
                  <td>2.25</td>
                </tr>
                <tr>
                  <td>201-400</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>401-500</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="chart-box__inner">
            <table>
              <thead>
                <tr>
                  <th
                    colspan="2"
                    className="sub-b-text"
                    style={{ borderBottom: "2px solid rgb(211, 211, 211)" }}
                  >
                    Consumption above 500units
                  </th>
                </tr>
                <tr>
                  <th className="sub-b-text">Units</th>
                  <th className="sub-b-text">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0-100</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>101-400</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>401-500</td>
                  <td>6.00</td>
                </tr>
                <tr>
                  <td>501-600</td>
                  <td>8.00</td>
                </tr>
                <tr>
                  <td>601-800</td>
                  <td>9.00</td>
                </tr>
                <tr>
                  <td>801-1000</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Above 1000 units</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
