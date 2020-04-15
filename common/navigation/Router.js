import { createSwitchNavigator } from "@react-navigation/core";
import Main from '../screens/Main';
import Details from '../screens/Details';

const Router = createSwitchNavigator({
    Main,
    Details
}, {
    backBehavior: "history"
})

export default Router;