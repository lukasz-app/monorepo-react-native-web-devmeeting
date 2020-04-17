import Main from '../screens/Main';
import Details from '../screens/Details';
import Other from '../screens/Other';
import createPlatformNavigator from './createPlatformNavigator'

const Router = createPlatformNavigator({
    Main,
    Details,
    Other
}, {
    backBehavior: "history"
})

export default Router;