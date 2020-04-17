import React from 'react'
import PlatformSpecificComponent from 'common/components/PlatformSpecificComponent'
import { Platform } from 'react-native';

class Proxy extends React.Component {

    startAnimation(up) {
        if (Platform.OS === 'web') {
            this.platformSpecificComponent.animate()
        } else {
            this.platformSpecificComponent.startAnimation()
        }
    }

    render() {
        const { name } = this.props;
        const platformProps = Platform.OS === 'android' ? {
            platform: name
        } : this.props;
        return (
            <PlatformSpecificComponent {...platformProps} ref={ref => { this.platformSpecificComponent = ref }} />
        )
    }
};

export default Proxy;