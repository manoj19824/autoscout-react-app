import React, { Component } from "react";
import ApiService from "../service/ApiService";
import styles from "../component/Reports.css";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      monthlyData: [],
      message: null,
    };
  }

  getContactListingPerMonth() {
    ApiService.getContactListingPerMonth().then((res) => {
      //set the previous state as null
      this.setState({ response: [] });
      this.setState({ monthlyData: res.data });
    });
  }

  getDistributions() {
    ApiService.getDistributions().then((res) => {
      this.setState({ monthlyData: [] });
      this.setState({ response: res.data });
    });
  }

  getAvgListingPrice() {
    ApiService.getAvgListingSellingPrice().then((res) => {
      this.setState({ monthlyData: [] });
      this.setState({ response: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Click on the Report to view the result</h2>
        <div className={styles.container}>
          <div className={styles.item}>
            <a
              className="btn"
              onClick={() => this.getAvgListingPrice()}
            >
              {" "}
              Fetch Avg Listing Selling Price
            </a>
          </div>
          <div className={styles.item}>
            <a
              className="btn"
              onClick={() => this.getDistributions()}
            >
              {" "}
              Fetch Distribution by Make
            </a>
          </div>
          <div className={styles.item}>
            <a
              className="btn"
              onClick={() => this.getContactListingPerMonth()}
            >
              {" "}
              Fetch Contact Listing Monthly
            </a>
          </div>
        </div>
        <h2>The Report data are ::</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>
                {Object.entries(this.state.response).map(([key, val], i) => (
                    <p key={i}>
                      {key}: {val}
                    </p>
                ))}
              </td>
              <td>
                {Object.entries(this.state.monthlyData).map(([key, val], i) => (
                    <div key={i}>
                     Month: {key}
                      <table>
                        <thead>
                        <tr>
                          <th>Ranking</th>
                          <th>ListingIds</th>
                          <th>Make</th>
                          <th>SellingPrice</th>
                          <th>Mileage</th>
                          <th>TotalAmtContacts</th>
                        </tr>
                        </thead>
                        <tbody>
                        {val.map(( listValue, index ) => {
                          return (
                              <tr key={index}>
                                <td>{listValue.ranking}</td>
                                <td>{listValue.listingId}</td>
                                <td>{listValue.make}</td>
                                <td>{listValue.sellingPrice}</td>
                                <td>{listValue.mileage}</td>
                                <td>{listValue.totalAmtContacts}</td>
                              </tr>
                          );
                        })}
                        </tbody>
                      </table>
                    </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const style = {
  margin: "10px",
};
export default Reports;
