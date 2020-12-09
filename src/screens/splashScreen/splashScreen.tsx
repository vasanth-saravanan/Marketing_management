import React, {useEffect,} from 'react'
import {View,StatusBar,Animated} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//constants
import * as constants from '../../constants'

//styles
import {styles} from './styles'
//react hooks
import {useDispatch} from 'react-redux'

//service
import * as service from '../companyCodeScreen/service'
import * as Action from '../../redux/compayCode/Action'

var springValue : any ,Code = '';

export function Splash({navigation} : any) {
  const dispatch = useDispatch() 
  useEffect(() => {
    service.getItem(setStatus)
  },[])

  useEffect(() => {
    spring()
  })
 
  const spring  = () => {
    springValue.setValue(0.3)
    Animated.spring(
      springValue,
      {
        toValue: 1,
        friction: 1,
        useNativeDriver : false
      }
    ).start()
  }

  const setStatus = (code : any) => {
    Code = code
  }

  const SetState = (netStatus : any , b : any) => {
  }
  
  springValue = new Animated.Value(0.3)
  setTimeout(() => {
    if(Code == '') {
      navigation.replace(constants.ScreenName.company_code)
    }else{
      dispatch(Action.check_code(Code , SetState , constants.ScreenName.splash , navigation))
    }
  },2000);
      
    return(
        <View style={styles.backContainer}>
            <StatusBar backgroundColor="#000" />
            <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
            <Animated.Image source={constants.Images.LOGO} style={{width: wp('40%'),
          height: wp('40%'),
          transform: [{scale: springValue}]}}/>
            </View>
            </View>
        </View>
    );
}

