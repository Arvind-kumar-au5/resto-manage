import React, { Component } from "react";
import { connect } from "react-redux";
import { waiterFetch, getWaiterId } from "../actions/action";
import { bindActionCreators } from "redux";
// import { Link } from "react-router-dom";
import img from "../components/image/waiter.jpg";

class Waiter extends Component {
  componentDidMount = () => {
    this.props.waiterFetch();
  };
  handleClick = () => {
    this.props.history.push("/order");
  };

  render() {
    console.log(this.props.waiterList);
    return (
      <div>
        <hr />
        <h2 className="tableHeading mt-5 mb-5">
          <span className="RESTRO">Select waiter</span>
        </h2>
        <div className="row tablelist">
          {/* <h3>Selected This Table Id {this.props.id}</h3> */}
          {this.props.waiterList.map((waiter, index) => {
            return (
              <div
                onClick={e => {
                  if (
                    window.confirm(
                      "You want " + " " + waiter.waiterName + " " + " Service?"
                    )
                  )
                    this.handleClick(this.props.getWaiterId(waiter.id), e);
                }}
                className="table col-md-3"
                key={index}
              >
                {/* <Link to="/order"> */}
                <ul className="listnone">
                  <li>
                    {" "}
                    <img src={img} height="200" width="100" />
                  </li>

                  <li className="borderb mb-3">{waiter.waiterName}</li>
                  {/* <li className="notshow">age : {waiter.age}</li> */}
                  {/* <li className="notshow">Mo. : {waiter.mobile}</li> */}
                  <li>ratings : {waiter.waiterRating}</li>
                  <li>exp : {waiter.waiterExpriance}</li>
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
    waiterList: state.waiterList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ waiterFetch, getWaiterId }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
