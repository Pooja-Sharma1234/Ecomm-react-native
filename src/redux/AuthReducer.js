const intialState = {
  name: "test",
  isLoggedIn: false,
};

const AuthActionType = {
  LOGIN_REQUEST: "login request",
  LOGIN_REQUEST_SUCCESS: "login request sucess",
  LOGIN_REQUEST_FAILED: "login request failed",
};

export const AuthReducer = (state = intialState, action) => {
  console.log(action.type, "action kya a raha hain");
  switch (action.type) {
    case "login request":
      console.log("object ko chnge kr ke return karega view main");
      return {
        ...state,
        isLoggedIn: false,
      };
    case "login success":
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case "login failed":
      return {
        ...intialState,
      };

    default:
      return state;
  }
};
