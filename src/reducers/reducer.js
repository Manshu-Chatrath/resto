import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const signup = (state = [], action) => {
  if (action.type === "Signup") {
    return action.payload;
  }
  return state;
};
const menu = (state = [], action) => {
  if (action.type === "MENU") {
    return action.payload;
  }
  if (action.type === "SEARCHING") {
    return action.payload;
  }
  return state;
};
const categories = (state = [], action) => {
  if (action.type === "CATEGORY") {
    return action.payload;
  }
  if (action.type === "SEARCHING") {
    return action.payload.sort();
  }
  return state;
};
const view = (state = [], action) => {
  if (action.type === "VIEW") {
    return action.payload;
  }
  return state;
};
const extrascat = (state = [], action) => {
  if (action.type === "EXTRAS") {
    return action.payload;
  }
  return state;
};
const Login = (state = [], action) => {
  if (action.type === "login") {
    return action.payload;
  }
  if (action.type === "Logout") {
    window.location.reload();
    return action.payload;
  }
  return state;
};
const allcartitems = (state = { items: [], loading: false }, action) => {
  if (action.type === "cart") {
    return {
      ...state.allcartitems,
      items: action.payload,
      loading: action.loading,
    };
  } else if (action.type === "cartLoading") {
    return { items: action.payload, loading: action.loading };
  }
  return state;
};
const everything = (state = [], action) => {
  if (action.type === "everything") {
    return action.payload;
  }
  return state;
};
const totalcart = (state = [], action) => {
  if (action.type === "totalcart") {
    return action.payload;
  } else if (action.type === "ADD") {
    return [...state, action.payload];
  }
  return state;
};
const paymentstatus = (state = [], action) => {
  if (action.type === "paymentstatus") {
    return action.message;
  }
  return state;
};
const booking = (state = null, action) => {
  if (action.type === "booking") {
    return { message: action.message };
  }
  return state;
};

export default combineReducers({
  Menu: menu,
  categories: categories,
  view: view,
  extrascat: extrascat,
  form: formReducer,
  Signup: signup,
  login: Login,
  allcartitems: allcartitems,
  everything: everything,
  totalcart: totalcart,
  paymentstatus: paymentstatus,
  booking: booking,
});
