export const SET_CODE = 'SET_CODE'
//for GPPD
export const COMPANY_CODE_REQUEST = 'REQUEST'
export const COMPANY_CODE_SUCCESS = 'SUCCESS'
export const COMPANY_CODE_FAILURE = 'FAILURE'


//success payload types
export type StateTypes = {
  CompanyUrl : any,
  CompanyCode : any,
}

//for action
export interface Company_Code_Request {
  type : typeof COMPANY_CODE_REQUEST
}

export interface Company_Code_Success {
  type : typeof COMPANY_CODE_SUCCESS,
  payload : StateTypes
}

export interface Company_Code_Failure {
  type : typeof COMPANY_CODE_FAILURE
}
  
export type CompanyCodeDispatchType = Company_Code_Request | Company_Code_Success | Company_Code_Failure