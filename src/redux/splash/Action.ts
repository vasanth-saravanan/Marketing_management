import {Dispatch} from 'redux'

//constants
import * as constants from '../../constants'
import {SplashDispatchType , SET_STATUS} from './Types'

export const check_code = () => (dispatch : Dispatch<SplashDispatchType>) => {
  dispatch({type : SET_STATUS})
};