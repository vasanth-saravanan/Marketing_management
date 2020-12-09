import { combineReducers } from 'redux'
import CompanyCodeReducer from './compayCode/Reducer'
import LoginReducer from './login/Reducer'
import DashboardReducer from './dashboard/Reducer'
import SalesReducer from './sales/Reducer'
import SplashReducer from './splash/Reducer'

const RootReducer = combineReducers({
    companyCode : CompanyCodeReducer,
    login : LoginReducer,
    dashboard : DashboardReducer,
    sales : SalesReducer,
    splash : SplashReducer
});

export default RootReducer