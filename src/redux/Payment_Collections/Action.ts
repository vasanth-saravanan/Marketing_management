import { Dispatch } from 'redux'
import axios from 'axios'
import * as constants from '../../constants'
import { SalesDispatchType, SALES_DATA_REQUEST, SALES_DATA_REQUEST_SUCCESS, SALES_DATA_REQUEST_FAILURE, TOTAL_AMOUNT } from '../../redux/sales/Types'


var datetotalamt;  var result = [];
var fromdate; var todate; var PC_list; var Totalamount;

export const getPaymentCollections = (CompanyUrl: any, BusinessUnitId: any, time: any, SetState: any) => (dispatch: Dispatch<SalesDispatchType>) => {
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
    
    dispatch({ type: SALES_DATA_REQUEST })
    var year, month, dt;
    let sdate = new Date();
    year = sdate.getFullYear();
    month = sdate.getMonth() + 1;
    dt = sdate.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    fromdate = dt + '-' + month + '-' + year;
    todate = dt + '-' + month + '-' + year;
    //console.log('f date ' + fromdate + 'to date ' + todate + ' busID' + BusinessUnitId)


    let params = 'FromDate=' + fromdate + '&ToDate=' + todate + '&BusinessUnitId=' + BusinessUnitId + '&Type=Collections' + '&Filter=' + time;


    axios.get(CompanyUrl + constants.URL.api_bank + params)
        .then(response => response.data)
        .then((responseJson) => {
            PC_list = responseJson;
            //console.log('PC_list    ' +PC_list)
            if (PC_list.length == 0) {
                console.log('data not found')
                if (time == '1 D') {
                    SetState(0, false, constants.Labels.empty)
                } else if (time == '7 D') {
                    SetState(1, false, constants.Labels.empty)
                } else if (time == '1 M') {
                    SetState(2, false, constants.Labels.empty)
                } else if (time == '3 M') {
                    SetState(3, false, constants.Labels.empty)
                } else {
                    SetState(4, false, constants.Labels.empty)
                }

            } else {
                console.log('data found')
                if (time == '1 D') {
                    SetState(0, true, constants.Labels.empty)
                } else if (time == '7 D') {
                    SetState(1, true, constants.Labels.empty)
                } else if (time == '1 M') {
                    SetState(2, true, constants.Labels.empty)
                } else if (time == '3 M') {
                    SetState(3, true, constants.Labels.empty)
                } else {
                    SetState(4, true, constants.Labels.empty)
                }
            }

            var dateArrKeyHolder: any = [];
            var dateArr: any = [];
            var resultarray: any[] = [];
            PC_list.forEach(function (item: any) {
                dateArrKeyHolder[item.Date] = dateArrKeyHolder[item.Date] || {};
                var obj = dateArrKeyHolder[item.Date];
                if (Object.keys(obj).length == 0)
                    dateArr.push(obj);

                obj.Date = item.Date;
                obj.activities = obj.activities || [];

                obj.activities.push({ CustomerName: item.CustomerName, Amount: item.Amount, PaymentNo: item.PaymentNo });
            });
            result = dateArr;
            //Add totalamount for date
            for (var i = 0; i < result.length; i++) {
                var subarray = result[i].activities;
                datetotalamt = 0
                for (var p = 0; p < subarray.length; p++) {
                    datetotalamt += Number(subarray[p].Amount);
                }
                resultarray.push({ Date: result[i].Date, Totalamount: datetotalamt, list: subarray })
            }
            //console.log('result array ' + JSON.stringify(resultarray))
            dispatch({ type: SALES_DATA_REQUEST_SUCCESS, payload: resultarray })

            Totalamount = 0;
            for (var p = 0; p < PC_list.length; p++) {
                Totalamount += Number(PC_list[p].Amount);
            }

            var n = Totalamount.toFixed(2);
            var str : any = n.toString();
           // console.log('total amount '+str)
            dispatch({ type: TOTAL_AMOUNT, TA: str })
        })
        .catch((error) => {
            dispatch({ type: SALES_DATA_REQUEST_FAILURE })
            console.error(error);
        });
}


export function numberWithCommas(x: string) {
    //var x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function dateFormat(d: any) {
    var t = new Date(d);
    return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ', ' + t.getFullYear();
}













