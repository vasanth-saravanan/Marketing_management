export const SALES_DATA_REQUEST = 'SALES_DATA_REQUEST'
export const SALES_DATA_REQUEST_SUCCESS = 'SALES_DATA_REQUEST_SUCCESS'
export const SALES_DATA_REQUEST_FAILURE = 'SALES_DATA_REQUEST_FAILURE'
export const TOTAL_AMOUNT = 'TOTAL_AMOUNT'

//success payload types
export type StateTypes = {
    Date: any;
    Totalamount: number;
    list: any[]
}[]

//for setcode payload types
export type TotalAmountTypes = {
    TotalAmount : any
  }
  
  //set username globally
  export interface Set_Totalamount {
    type : typeof TOTAL_AMOUNT,
    TA : TotalAmountTypes
  }
  

//for action
export interface Sales_Data_Request {
  type : typeof SALES_DATA_REQUEST
}

export interface Sales_Data_Request_Success {
  type : typeof SALES_DATA_REQUEST_SUCCESS,
  payload : StateTypes
}

export interface Sales_Data_Request_Failure {
  type : typeof SALES_DATA_REQUEST_FAILURE
}
  
export type SalesDispatchType = Sales_Data_Request | Sales_Data_Request_Success | Sales_Data_Request_Failure
| Set_Totalamount