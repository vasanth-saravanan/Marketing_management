import { Dispatch } from 'redux'
import axios from 'axios'
import * as  constants from '../../constants'
import { LoginDispatchType, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './Types'
import * as remService from '../../screens/loginScreen/service'

export const checkCredential = (username: any, password: any
    , url: any, code: any, SetStates: any, check: boolean,
    RememberMe: any, navigation: any) => (dispatch: Dispatch<LoginDispatchType>) => {
        console.log(username , password , url , code , check)
        dispatch({ type: LOGIN_REQUEST })
        axios.request({
            method: 'post',
            url: url + 'Token',
            data: {},
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            transformRequest: [(data, headers) => {
                data = 'grant_type=password&username=' + code + '_' + username + '&password=' + password
                return data
            }]
        }).then(response => response.data)
            .then(responseJson => {
                const returnObj = responseJson;
                dispatch({ type: LOGIN_SUCCESS, payload: {
                    businessUnitId : returnObj.businessUnitId,
                    UserName : username
                } })
                    SetStates(constants.Labels.empty, constants.Labels.empty, constants.Labels.empty)
                    //navigation.goBack()
                    navigation.push(constants.navigation.bottomTab)
                    if (check == false) {
                        remService.setItem(username , password , false)
                    }else{
                        remService.setItem('' , '' , true)
                        RememberMe('' , '' , false)
                    }
            }).catch((error) => {
                dispatch({ type: LOGIN_FAILURE })
                SetStates(constants.Labels.UN_r_Pass_is_incorrect, constants.Labels.empty, constants.Labels.empty)
            });
    };


