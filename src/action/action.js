import restaurantApi from "../Components/restaurantApi";
import history from "../Components/history";

export const menu = () => async (dispatch) => {
  const response = await restaurantApi.get("/resto-menu");
  dispatch({ type: "MENU", payload: response.data.items });
};
export const categories = () => async (dispatch) => {
  const response = await restaurantApi.get("/allcategory");
  dispatch({ type: "CATEGORY", payload: response.data.categories[0] });
};
export const view =
  (id, isDefault = false) =>
  async (dispatch) => {
    if (isDefault) {
      dispatch({ type: "VIEW", payload: [] });
    } else {
      const response = await restaurantApi.get(`/addcart/${id}`);
      dispatch({ type: "VIEW", payload: response.data.items });
    }
  };
export const allextras =
  (id, isDefault = false) =>
  async (dispatch) => {
    if (isDefault) {
      dispatch({ type: "EXTRAS", payload: [] });
    } else {
      const response = await restaurantApi.get(`/cat/${id}`);
      dispatch({ type: "EXTRAS", payload: response.data.items });
    }
  };
export const search = (term) => async (dispatch) => {
  const response = await restaurantApi.get(`/searching/${term}`);
  dispatch({ type: "SEARCHING", payload: response.data.items });
};
export const signup = (formvalues) => async (dispatch) => {
  const response = await restaurantApi.post("/user-signup", {
    email: formvalues.email,
    password: formvalues.password,
    confirmpassword: formvalues.confirmpassword,
  });
  if (response.data.message) {
    dispatch({ type: "Signup", payload: response.data });
  } else {
    dispatch({ type: "Signup", payload: response.data.result[0] });
    history.push("/login");
  }
};

export const LogIn = (formvalues) => async (dispatch) => {
  const response = await restaurantApi.post("/login", {
    email: formvalues.email,
    password: formvalues.password,
  });

  if (response.data.credentials) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("cartId", response.data.cartId);
    restaurantApi.defaults.headers.common["Authorization"] =
      response.data.token;
    dispatch({ type: "login", payload: response.data });
    window.location.href = "https://resto2.herokuapp.com/";
  }
  dispatch({ type: "login", payload: response.data });
};

export const LogOut = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("cartId");
  restaurantApi.defaults.headers.common["Authorization"] = "";
  history.push("/");
  dispatch({ type: "Logout", payload: [] });
};
export const addcart = (dishid, extrasid, quantity) => async (dispatch) => {
  let cartid = localStorage.getItem("cartId");
  for (let x = 0; x < quantity; x++) {
    let response = await restaurantApi.post(`/addcart/${dishid}/${cartid}`);

    if (extrasid.length > 0) {
      for (let i = 0; i < extrasid.length; i++) {
        await restaurantApi.post(
          `/addtoextras/${dishid}/${cartid}/${response.data.id}/${extrasid[i]}`
        );
      }
    } else {
      await restaurantApi.post(
        `/addtoextras/${dishid}/${cartid}/${response.data.id}/false`
      );
    }
    dispatch({ type: "ADD", payload: { dish_id: dishid, cart_id: cartid } });
  }
};

export const allcartitems = () => async (dispatch) => {
  let cartid = localStorage.getItem("cartId");
  dispatch({ type: "cartLoading", payload: [], loading: "pending" });
  let response = await restaurantApi.get(`/allcart/${cartid}`);
  dispatch({ type: "cart", payload: response.data.items, loading: "success" });
};
export const realextras = () => async (dispatch) => {
  let cartid = localStorage.getItem("cartId");
  let response = await restaurantApi.get(`/extras/${cartid}`);
  dispatch({ type: "everything", payload: response.data.items });
};
export const totalcart = () => async (dispatch) => {
  let cartid = localStorage.getItem("cartId");
  let response = await restaurantApi.get(`/totalcart/${cartid}`);
  dispatch({ type: "totalcart", payload: response.data.items });
};
export const deleting = (id) => async (dispatch) => {
  await restaurantApi.delete(`/deletecart/${id}`);
  window.location.reload();
};
export const checkout = (id, dish33, price, email) => async (dispatch) => {
  let cartid = localStorage.getItem("cartId");
  const response = await restaurantApi.post("/checkout", {
    amount: price,
    products: dish33,
    email: email,
    cartid: cartid,
    id,
  });
  dispatch({ type: "paymentstatus", message: response.data.message });
};
export const booking = (
  email = null,
  people = null,
  time = null,
  date = null,
  isAsync = true
) => {
  if (isAsync) {
    return async (dispatch) => {
      const response = await restaurantApi.post("/booking", {
        email: email,
        people: people,
        time: time,
        date: date,
      });

      dispatch({ type: "booking", message: response.data.message });
    };
  } else {
    return (dispatch) =>
      dispatch({
        type: "default",
      });
  }
};
