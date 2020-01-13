import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const Routes = createSwitchNavigator({
    Main
}, { initialRouteName: 'Main' });

export default createAppContainer(Routes);