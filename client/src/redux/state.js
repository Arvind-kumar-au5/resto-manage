import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let initialState = {
    tableList: [],
    waiterList: [],
    menuList: [],
    orderList: [],
    addToCarts: [],
    tableId: "",
    waiterId: "",
    user_name: "",
    user_mobile: "",
    total_Price: 0,
    tip_price:null,
    isPayment: false,
    payment_mode: "cash"
};
const middleware = [thunk];

function appReducer(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case "get_table":
      stateCopy.tableList = [...stateCopy.tableList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "get_waiter":
      stateCopy.waiterList = [...stateCopy.waiterList, ...action.payload];

      console.log(stateCopy);
      return stateCopy;
    case "get_order":
      stateCopy.orderList = [...stateCopy.orderList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "get_menu":
      stateCopy.menuList = [...stateCopy.menuList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "add_to_carts":
      stateCopy.addToCarts = [...stateCopy.addToCarts, action.payload];
      stateCopy.total_price = stateCopy.addToCarts.reduce((acc, b) => {
        return acc + b.price;
      }, 0);
      stateCopy.tip_price = (100 * stateCopy.total_Price) / 10;
     console.log(stateCopy)
      
      stateCopy.isPayment = true;
      stateCopy.tip_price = (stateCopy.total_Price / 100) * 10
      console.log(stateCopy);
      return stateCopy;
    case "get_table_id":
      stateCopy.tableId = action.payload;
      return stateCopy;
    case "get_waiter_id":
      stateCopy.waiterId = action.payload;
      console.log(stateCopy);
      return stateCopy;
    case "get_name":
      stateCopy.user_name = action.payload;
      return stateCopy;
    case "get_mobile":
      stateCopy.user_mobile = action.payload;
      return stateCopy;
    case "get_payment_mode":
      stateCopy.payment_mode = action.payload;
      return stateCopy;
    default:
      return stateCopy;
  }
}

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
