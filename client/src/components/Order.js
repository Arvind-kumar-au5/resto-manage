import React, { Component } from "react";
import { connect } from "react-redux";
import {
  orderFetch,
  fetchMenus,
  handleName,
  handleMobile,
  handlePayment,
  addToCart,
  postOrder
} from "../actions/action";
import { bindActionCreators } from "redux";

class Order extends Component {
  componentDidMount = () => {
    this.props.orderFetch();
    this.props.fetchMenus();
  };
  state = {
      tip_price :''
  }

 

    handleSubmit(e) {
      e.preventDefault();
      const {
        user_name,
        user_mobile,
        tableId,
        waiterId,
        total_price,
        payment_mode
      } = this.props;
      console.log("generatebill :", this.props);
      const order = {
        user_name,
        user_mobile,
        tableId,
        waiterId,
        total_price,
        payment_mode
      };
      this.props.postOrder(order);
      
 

    }
    handleClick = () => {
        this.props.history.push("/invoice");
    };

  render() {
    console.log(this.props.orderList);
   
    return (
      <div className="container text-center">
        <hr />
        <h2 className="tableHeading mt-5 ml-5 mb-5 text-center">
          Your<span className="RESTRO ">-Order 😊</span>
        </h2>
        <form onSubmit={e => this.handleSubmit(e)} className="shadow">
          <div className="row  ">
            <div className="col-md-6 border shade  ">
              <h2 className="tableHeading mt-2 mb-2">
                <span className="RESTRO">User</span>
              </h2>
              <hr />
              <input
                type="text"
                onChange={e => this.props.handleName(e.target.value)}
                className="form-control ml-2"
                placeholder="Enter UserName"
                required
              />
              <br />
              <input
                type="number"
                onChange={e => this.props.handleMobile(e.target.value)}
                className="form-control ml-2"
                placeholder="Enter Mobile Number"
                required
              />
              <h2 className="text-center">
                <span className="RESTRO" style={{ textAlign: "center" }}>
                  Your Menu
                </span>
              </h2>
              <hr className="mb-5" />
              <ul>
                {this.props.menuList.map((menu, index) => {
                  return (
                    <div key={index} className="card mt-5 shadow">
                      <li className="text-center" >
                        <h5 className="text-center">Name: {menu.itemName}</h5>
                        <h5>Cuisine: {menu.cuisineName}</h5>
                        <h5>Food Type: {menu.cuisineName}</h5>
                        <h5>Price {menu.itemPrice}</h5>
                      </li>
                      <button className="btn btn-success" onClick={() => this.props.addToCart(menu)}>Order Now</button>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-6 border  shadow">
              <h3 className="tableHeading mt-2  mb-2">
                Customer Order<span className="RESTRO"></span>
              </h3>
              <hr />
              <div>
                <div className="shadow rounded">
                  <div className="table-scroll">
                    <table className="table table-hover">
                      <thead className="bg-dark" style={{ color: "black" }}>
                        <tr>
                          <th>Item Name</th>
                          <th>Price (₹)</th>
                          <th>Tip Price (₹)</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.addToCarts.map((element, index) => {
                          
                          return (
                            <tr key={index}>
                              <td>
                                <b> {element.name} </b>
                              </td>
                              <td>
                                {" "}
                                <b>₹ {element.price} </b>
                              </td>
                              <td>
                                {" "}
                                <b>₹ {this.state.tip_price} </b>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-danger">
                                  Remove from Cart
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bill">
                Restaurant_Bill :
                <span className="price"> {this.props.total_price}</span>
              </div>
              {this.props.isPayment && (
                <select
                  className="btn btn-block mt-3 payment"
                  onChange={e => this.props.handlePayment(e.target.value)}
                >
                  <option className="pay" value="cc">
                    Credit Card
                  </option>
                  <option className="pay" value="dc">
                    Debit Card
                  </option>
                  <option className="pay" value="cash">
                    Cash
                  </option>
                  <option className="pay" value="online">
                    Online{" "}
                  </option>
                </select>
              )}
              <br />
              <button className=" btn btn-success btn-block "
              onClick={this.handleClick}
              >
                Generate Bill
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderList: state.orderList,
    menuList: state.menuList,
    addToCarts: state.addToCarts,
    total_price: state.total_price,
    user_name: state.user_name,
    user_mobile: state.user_mobile,
    tableId: state.tableId,
    waiterId: state.waiterId,
    isPayment: state.isPayment,
    payment_mode: state.payment_mode
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      orderFetch,
      fetchMenus,
      addToCart,
      handleName,
      handleMobile,
      handlePayment,
      postOrder
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
