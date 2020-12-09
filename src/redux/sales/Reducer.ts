import {StateTypes,SalesDispatchType ,TOTAL_AMOUNT, SALES_DATA_REQUEST , SALES_DATA_REQUEST_SUCCESS , SALES_DATA_REQUEST_FAILURE } from './Types'

    interface SalesState {
      loading : boolean,
      Sales_Data ? : StateTypes,
      TAMT ?: any
    }
    
    const initialState: SalesState = {
        loading : false,
    }
    
    const SalesReducer = (state : SalesState = initialState , action : SalesDispatchType) : SalesState => {
      switch(action.type) {
        case SALES_DATA_REQUEST :
          return {
            ...state,
            loading : true
          }
        case SALES_DATA_REQUEST_SUCCESS :
          return {
            ...state,
            loading : false,
            Sales_Data : action.payload,
          }
        case SALES_DATA_REQUEST_FAILURE :
          return {
            ...state,
            loading : false
          }
        case TOTAL_AMOUNT :
            return {
              ...state,
              loading : false,
              TAMT : action.TA
            }
        default : return state
      }
    }
    
    export default SalesReducer