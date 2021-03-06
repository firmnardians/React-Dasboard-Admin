import React, { Component } from "react";
import DetailTransactions from "../../components/DetailTransactions/DetailTransactions";
import SellData from "../../components/Chart/SellData";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Business: ["All Business", "Ayam Geprek", "Cofee Shop"],
      Outlet: ["All Outlet", "Ayam Kisamaun", "Kopi Kenangan"]
    };
  }
  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>Dashboard</h1>
        </div>

        <div className="card-app">
          <div className="card-app-title">
            <h2 className="ml-20 ">My Business</h2>
          </div>
          <div className="card-flex mb-20">
            <div className="card-grid">
              <select className="select-group mr-20">
                {this.state.Business.map((itemsBusinessDashboard, Index) => (
                  <option value={itemsBusinessDashboard} key={Index}>
                    {itemsBusinessDashboard}
                  </option>
                ))}
              </select>
              <select className="select-group">
                {this.state.Outlet.map((itemsOutletDashboard, Index) => (
                  <option value={itemsOutletDashboard} key={Index}>
                    {itemsOutletDashboard}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="card-sub-app mb-20 text-center mt-30">
            <div className="card-flex">
              <div className="card-grid">
                <DetailTransactions title="Total transaksi" number="0" />
              </div>
              <div className="card-grid">
                <DetailTransactions title="Transaksi selesai" number="0" />
              </div>
              <div className="card-grid">
                <DetailTransactions title="Transaksi berjalan" number="0" />
              </div>
              <div className="card-grid">
                <DetailTransactions title="Transaksi batal" number="0" />
              </div>
              <div className="card-grid">
                <DetailTransactions title="Transaksi void" number="0" />
              </div>
            </div>
          </div>
          <hr className="mt-30 mb-30" />
          <SellData className="mt-30" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
