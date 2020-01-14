import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';

// const Auth = createSwitchNavigator({
//     Login,
//     SignIn,
//     SingUp,
//     ForgetPassword,
// });

const App = createSwitchNavigator({
    Main
});

const SwitchNavigator = createSwitchNavigator({
    Splash,
    App,
    // Auth
});
export default createAppContainer(SwitchNavigator);