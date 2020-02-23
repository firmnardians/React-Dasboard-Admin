import React, { Component } from "react";
import { Line } from "react-chartjs-2";

// let getHour = [];
// for (let i = 0; i < 23; i++) {
//   getHour.push(i + 1);
// }

const data = {
  labels: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00"
  ],
  datasets: [
    {
      label: "Sell data",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(182, 122, 44, 0.507)",
      borderColor: "#b94b6f",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 45]
    }
  ]
};

export class SellData extends Component {
  render() {
    return (
      <>
        <div className="mt-30">
          <div className="card-app-title">
            <h2>Sell data</h2>
          </div>
          <div className="card-sub-app">
            <Line data={data} />
          </div>
        </div>
      </>
    );
  }
}

export default SellData;
