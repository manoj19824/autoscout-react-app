import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UploadCsv from "./component/UploadCsv";
import Reports from "./component/Reports";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-6">
          <h1 className="text-center" style={style}>
           Auto-Scout Application
          </h1>
          <Switch>
            <Route path="/upload-csv" exact component={UploadCsv} />
            <Route path="/reports" component={Reports} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};
export default App;
