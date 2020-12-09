import { LoginDispatchType, StateTypes, 
    LOGIN_REQUEST ,SET_USERNAME, LOGIN_SUCCESS , LOGIN_FAILURE } from "./Types"
    
    
    interface loginState {
      loading : boolean,
      Login_Data ? : StateTypes,
    }
    
    const initialState: loginState = {
        loading : false,
    }
    
    const LoginReducer = (state : loginState = initialState , action : LoginDispatchType) : loginState => {
      switch(action.type) {
        case LOGIN_REQUEST :
          return {
            ...state,
            loading : true
          }
        case LOGIN_SUCCESS :
          return {
            ...state,
            loading : false,
            Login_Data : action.payload,
          }
        case LOGIN_FAILURE :
          return {
            ...state,
            loading : false
          }
        default : return state
      }
    }
    
    export default LoginReducer