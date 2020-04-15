import { createSwitchNavigator } from "@react-navigation/core";
import Main from '../screens/Main';
import Details from '../screens/Details';
import Other from '../screens/Other';

const Router = createSwitchNavigator({
    Main,
    Details,
    Other
}, {
    backBehavior: "history"
})

export default Router;