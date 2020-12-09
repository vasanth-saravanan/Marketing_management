import {Dispatch} from 'redux'
import axios from 'axios'
import {ToastAndroid} from 'react-native'
//serivce
import * as service from '../../screens/companyCodeScreen/service'
//constants
import * as constants from '../../constants'
import {CompanyCodeDispatchType ,COMPANY_CODE_REQUEST , COMPANY_CODE_SUCCESS , COMPANY_CODE_FAILURE} from './Types'

export const check_code = (code : any , SetState : any , screenName : string , navigation : any) => (dispatch : Dispatch<CompanyCodeDispatchType>) => {
  dispatch({type : COMPANY_CODE_REQUEST})
  console.log(code)
  var comapany_code_params = 'Companycode='+ code
  axios.get(constants.URL.MAIN_URL+ constants.URL.company + comapany_code_params)
    .then((response) => {
          return response.data;
    })
    .then((responseJson) => {
      //console.log(responseJson)
          SetState(constants.Labels.empty , constants.Labels.empty)
            dispatch({type : COMPANY_CODE_SUCCESS , payload : {
              CompanyUrl : responseJson.CompanyUrl,
              CompanyCode : code
            }})
            service.setItem(code)
            if(screenName == constants.ScreenName.company_code || screenName == constants.ScreenName.splash){
              navigation.replace(constants.ScreenName.Login)
             }else{
               navigation.goBack()
             }
          //console.log('got it')
    })
    .catch((error) => {
      if(screenName == constants.ScreenName.splash){
        ToastAndroid.show(constants.Labels.network_error, ToastAndroid.SHORT)
        ToastAndroid.show(constants.Labels.turn_on_net, ToastAndroid.SHORT)
      }
      dispatch({type : COMPANY_CODE_FAILURE})
      SetState(constants.Labels.empty, constants.Labels.invalid_code)
      console.log('invalid')
    });
};