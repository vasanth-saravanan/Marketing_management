import {DashboardDispatchType,StateTypes, BANK_CASH_REQUEST, BANK_CASH_SUCCESS, BANK_CASH_FAILURE } from './Types'


interface dashboardState {
    loading: boolean,
    dashboardData ? : StateTypes
}

const initialState: dashboardState = {
    loading: false,
}

const DashboardReducer = (state: dashboardState = initialState, action: DashboardDispatchType): dashboardState => {
    switch (action.type) {
        case BANK_CASH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BANK_CASH_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboardData : action.payload
            }
        case BANK_CASH_FAILURE:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}

export default DashboardReducer