import { SplashDispatchType, SET_STATUS} from "./Types"
    
    
    interface statusState {
      status : number,
    }
    
    const initialState: statusState = {
        status : 0,
    }
    
    const SplashReducer = (state : statusState = initialState , action : SplashDispatchType) : statusState => {
      switch(action.type) {
        case SET_STATUS :
          return {
            ...state,
            status : 1
          }
        default : return state
      }
    }
    
    export default SplashReducer