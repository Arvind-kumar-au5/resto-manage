import React from "react";
import Table from "./components/Table";
import Waiter from "./components/Waiter";
import Order from "./components/Order";
import Navbar from "./components/Navbar";
import Invoice from "./components/Invoice"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <section className="container">
        <Switch>
          <Route exact path="/table" component={Table} />
          <Route exact path="/waiter" component={Waiter} />
          <Route exact path="/order" component={Order} />
          <Route exact path = "/invoice" component = {Invoice}/>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
