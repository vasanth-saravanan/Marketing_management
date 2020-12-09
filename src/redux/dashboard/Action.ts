import { Dispatch } from 'redux'
import axios from 'axios'
import * as constants from '../../constants'
import {
  DashboardDispatchType, BANK_CASH_REQUEST, BANK_CASH_SUCCESS
  , BANK_CASH_FAILURE} from './Types'

var Month: number, Today: number, ca: any, ba: any;
var fromdate = new Date().toISOString().split('T')[0];

export const bankdetails = (BusinessUnitId: any, CompanyUrl: any,) =>
  (dispatch: Dispatch<DashboardDispatchType>) => {
  today_sales(BusinessUnitId , CompanyUrl)
  month_sales(BusinessUnitId , CompanyUrl)
  let param1 = 'BusinessUnitId=' + BusinessUnitId;
  dispatch({ type: BANK_CASH_REQUEST })
  axios.get(CompanyUrl + constants.URL.cash_bank + param1, {
    method: 'GET',
  })
    .then(response => response.data)
    .then((responseJson) => {
      let cashamount = 0;
      let bankamount = 0;
      responseJson.map((element: any) => {
        if (element.Groups == "Cash") {
          cashamount += Number(element.Balance);
        } else {
          bankamount += Number(element.Balance);
        }
      });
      var CA = cashamount.toFixed(2);
      ca = CA.toString();
      var BA = bankamount.toFixed(2);
      ba = BA.toString();
      dispatch({ type: BANK_CASH_SUCCESS  , payload : {
        Cash_Amount : ca,
        Bank_Amount : ba,
        Today_Sales : Today,
        Month_sales : Month
      }})
    })
    .catch((error) => {
      dispatch({ type: BANK_CASH_FAILURE })
      //console.error(error);
    });  
}


export const today_sales = (BusinessUnitId : any , CompanyUrl : any) => {
  let today_param = 'fromDate=' + fromdate + '&toDate=' + fromdate + '&businessUnitId=' + BusinessUnitId;
    axios.get(CompanyUrl + constants.URL.Today + today_param)
      .then(response => response.data)
      .then((responseJson) => {
        var TM = responseJson.TotalAmount.toFixed(2);
        Today = TM.toString();
        console.log('Today ' + Today)
        //console.log('got it today sales')
      })
      .catch((error) => {
        //console.error(error);
      });
}

export const month_sales = (BusinessUnitId : any , CompanyUrl : any) => {
  var date1 = new Date();
  var date2 = date1.setDate(date1.getDate() - 30);
  var todate = date1.toISOString().split('T')[0];
  let month_param = 'fromDate=' + todate + '&toDate=' + fromdate + '&businessUnitId=' + BusinessUnitId;
    axios.get(CompanyUrl + constants.URL.month_sales + month_param)
      .then(response => response.data)
      .then((responseJson) => {
        var TM = responseJson.TotalAmount.toFixed(2);
        Month = TM.toString();
        console.log('Month ' + Month)
      })
      .catch((error) => {
        //console.error(error);
      });
} 

export function numberWithCommas(x : any) {
  //var x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}