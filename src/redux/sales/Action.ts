import {Dispatch} from 'redux'
import axios from 'axios'
import * as constants from '../../constants'
import {SalesDispatchType , SALES_DATA_REQUEST , SALES_DATA_REQUEST_SUCCESS , SALES_DATA_REQUEST_FAILURE, TOTAL_AMOUNT } from './Types'


export const getSales = (CompanyUrl : any, BusinessUnitId : any, time : any, SetState : any) => (dispatch : Dispatch<SalesDispatchType>) => {
    if (time == 0) {
      time = '1 D'
    } else if (time == 1) {
      time = '7 D'
    } else if (time == 2) {
      time = '1 M'
    } else if (time == 3) {
      time = '3 M'
    } else {
      time = '1 Y'
    }
    dispatch({type : SALES_DATA_REQUEST})
    var params = 'api/Interface_SalesInvoices?BusinessUnitId=' + BusinessUnitId + '&Filter=' + time 
    axios.get(CompanyUrl + params)
      .then(response => response.data)
      .then((responseJson) => {
        let saleslist = responseJson;
        if (saleslist.length == 0) {
          console.log('data not found')
          if (time == '1 D') {
            SetState(0, false)
          } else if (time == '7 D') {
            SetState(1, false)
          } else if (time == '1 M') {
            SetState(2, false)
          } else if (time == '3 M') {
            SetState(3, false)
          } else {
            SetState(4, false)
          }

        } else {
          console.log('data found')
          if (time == '1 D') {
            SetState(0, true)
          } else if (time == '7 D') {
            SetState(1, true)
          } else if (time == '1 M') {
            SetState(2, true)
          } else if (time == '3 M') {
            SetState(3, true)
          } else {
            SetState(4, true)
          }
        }
        var dateArrKeyHolder : any = [];
        var dateArr : any = [];
        var result : any = [];
        var resultarray = [];
        saleslist.forEach(function (item : any) {
          dateArrKeyHolder[item.Date] = dateArrKeyHolder[item.Date] || {};
          var obj = dateArrKeyHolder[item.Date];
          if (Object.keys(obj).length == 0)
            dateArr.push(obj);

          obj.Date = item.Date;
          obj.activities = obj.activities || [];
          obj.activities.push({ CustomerName: item.CustomerName, Amount: item.TotalAmount, PaymentNo: item.InvoiceNumber });
        });
        result = dateArr;
        //console.log(result);

        //Add totalamount for date
        for (var i = 0; i < result.length; i++) {
          var subarray = result[i].activities;
          var amount = 0;
          for (var p = 0; p < subarray.length; p++) {
            amount += Number(subarray[p].Amount);

          }
          resultarray.push({ Date: result[i].Date, Totalamount: amount, list: subarray })
        }
        //console.log(resultarray)

        dispatch({type : SALES_DATA_REQUEST_SUCCESS , payload : resultarray})

        var Totalamount : any = 0;
        for (var p = 0; p < saleslist.length; p++) {
          Totalamount += Number(saleslist[p].TotalAmount);
        }

        var n = Totalamount.toFixed(2);
        var str = n.toString();
        console.log(str)
        dispatch({type : TOTAL_AMOUNT , TA : str})
      })
      .catch((error) => {
        dispatch({type : SALES_DATA_REQUEST_FAILURE})
        console.error(error);
      });
}


export function numberWithCommas(x : string) {
  //var x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function dateFormat(d : any) {
  var t = new Date(d);
  return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ', ' + t.getFullYear();
}
