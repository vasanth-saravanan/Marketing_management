import React, {Component} from 'react'
import Routes from './src/routes/routes'
import {Provider} from 'react-redux'
import store from './src/redux/store'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <Routes/>
      </Provider>
    );
  }
};

export default App;
