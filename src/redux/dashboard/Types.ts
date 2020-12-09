//month sale
export const BANK_CASH_REQUEST = 'BANK_CASH_REQUEST'
export const BANK_CASH_SUCCESS = 'BANK_CASH_SUCCESS'
export const BANK_CASH_FAILURE = 'BANK_CASH_FAILURE'

//============================Bank cash==========================
export type StateTypes = {
    Cash_Amount : number,
    Bank_Amount : number,
    Today_Sales : number,
    Month_sales : number,
  }

//for action
export interface Bank_Cash_Request {
    type: typeof BANK_CASH_REQUEST
}

export interface Bank_Cash_Success {
    type: typeof BANK_CASH_SUCCESS,
    payload : StateTypes
}

export interface Bank_Cash_Failure {
    type: typeof BANK_CASH_FAILURE
}

export type DashboardDispatchType = Bank_Cash_Request |
Bank_Cash_Success | Bank_Cash_Failure
