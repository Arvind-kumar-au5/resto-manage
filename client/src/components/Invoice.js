import React from "react";
import { connect } from "react-redux";

function Invoice({ order }) {
  console.log(order);
  return (
    <div>
    <p className="text-center" style={{fontSize:'20px'}}>----Customer Bill's---</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Table</th>
            <th scope="col">Waiter</th>
            <th scope="col">Total</th>

          </tr>
        </thead>
        <tbody>
            {order && order.map((or,index)=>{
                return <tr>
                    <th>{or.index}</th>
                    <td>{or.userName}</td>
                    <td>{or.userMobile}</td>
                    <td>{or.table && or.table.tableName}</td>
                    <td>{or.table && or.waiter.waiterName}</td>
                    <td>{or.totalPrice}</td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  order: state.orderList
});

export default connect(mapStateToProps)(Invoice);
