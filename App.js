import React from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
// import PushNotificationLocal from './src/components/PushNotificationLocal';
// import Data from './src/components/redux_api_data/Data';
import Navigation from './src/components/Navigation';
// import ButtonTouchablePressable from './src/components/ButtonTouchablePressable';
// import AlertToast from './src/components/AlertToast';
// import Modals from './src/components/Modals';
// import Images from './src/components/Images';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PushNotificationLocal /> */}
      {/* <Data /> */}
      <Navigation />
      {/* <ButtonTouchablePressable /> */}
      {/* <AlertToast /> */}
      {/* <Modals /> */}
    </Provider>
  );
}
export default App;