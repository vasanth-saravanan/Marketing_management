import { CompanyCodeDispatchType, StateTypes, 
COMPANY_CODE_REQUEST , COMPANY_CODE_SUCCESS , COMPANY_CODE_FAILURE,} from "./Types"


interface companyCodeState {
  loading : boolean,
  Code_Data ? : StateTypes,
}

const initialState: companyCodeState = {
    loading : false,
}

const CompanyCodeReducer = (state : companyCodeState = initialState , action : CompanyCodeDispatchType) : companyCodeState => {
  switch(action.type) {
    case COMPANY_CODE_REQUEST :
      return {
        ...state,
        loading : true
      }
    case COMPANY_CODE_SUCCESS :
      return {
        ...state,
        loading : false,
        Code_Data : action.payload,
      }
    case COMPANY_CODE_FAILURE :
      return {
        ...state,
        loading : false
      }
    default : return state
  }
}

export default CompanyCodeReducer