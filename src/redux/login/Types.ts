//for setting credential
export const SET_USERNAME = 'SET_USERNAME'

//for GPPD
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


//success payload types
export type StateTypes = {
    businessUnitId : any,
    UserName : any
}


//for action
export interface Login_Request {
  type : typeof LOGIN_REQUEST
}

export interface Login_Success {
  type : typeof LOGIN_SUCCESS,
  payload : StateTypes
}

export interface Login_Failure {
  type : typeof LOGIN_FAILURE
}
  
export type LoginDispatchType = Login_Request | Login_Success | Login_Failure
