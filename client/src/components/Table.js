import React, { Component } from "react";
import { connect } from "react-redux";
import { tableFetch, getTableId } from "../actions/action";
import { bindActionCreators } from "redux";
import img from "../components/image/download.png";
import { Link } from "react-router-dom";
import Waiter from "./Waiter";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router";



class Table extends Component {

  componentDidMount = () => {
    this.props.tableFetch();

  };
  
  handleClick = () => {
    this.props.history.push('/waiter');
  };

  render() {
    
    return (
      <div className="container card ">
        <hr />
        <h2 className="tableHeading mt-5 mb-5">
          <span className="RESTRO">TABLE</span>
        </h2>
        <div className="row tablelist shadow">
          {this.props.tableList.map((table, index) => {
            return (
              
              <div
                onClick={e => {
                  if (window.confirm(table.tableName +" " + "Want?"))
                    this.handleClick(this.props.getTableId(table.id), e);
                }}
                className="table col-md-3"
                key={index}
              >
                   
                

                <ul className="listnone">
                  <li>
                    {" "}
                    <img src={img} height="200" width="100" />
                  </li>
                  <li>{table.tableName}</li>

                  <li>strength : {table.seatingStrength}</li>
                  <li className="borderb mb-3">floor : {table.floorNumber}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tableList: state.tableList
  };
};



export default withRouter(connect(mapStateToProps, {tableFetch,getTableId})(Table));
