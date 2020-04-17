import Main from '../screens/Main';
import Details from '../screens/Details';
import Other from '../screens/Other';
import { createSwitchNavigator } from "@react-navigation/core";

const Router = createSwitchNavigator({
    Main,
    Details,
    Other
}, {
    backBehavior: "history"
})

export default Router;