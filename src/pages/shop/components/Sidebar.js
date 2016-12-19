import React from 'react';
import { Text, View, Animated, Easing, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SidebarMenu from './SidebarMenu'

export default class Sidebar extends React.Component {

    static propTypes = {
        onOverlayPress: React.PropTypes.func.isRequired,
        open: React.PropTypes.bool.isRequired
    }

    styles = {
        container: () => ({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }),
        overlay: () => ({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: this.animatedOverlay
        }),
        sidebar: () => ({
            backgroundColor: 'whitesmoke',
            flex: 1,
            width: 250,
            marginLeft: this.animatedSidebar
        }),
        header: () => ({
            height: 50,
            backgroundColor: '#2a4c85',
            flexDirection: 'column'
        }),
        menu: () => ({
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
        })
    }

    componentWillMount(){
        this.animatedSidebar = new Animated.Value(-250)
        this.animatedOverlay = new Animated.Value(0)
    }

    componentDidUpdate(prevProps){
        // if open prop changes, then start hide or show Animation
        if(this.props.open != prevProps.open){
            this.props.open
                ? this.showSidebar()
                : this.hideSidebar()
        }
    }

    hideSidebar(){

        Animated.timing( this.animatedSidebar, {
            toValue: -250,
            duration: 300
        }).start()

        Animated.timing( this.animatedOverlay, {
            toValue: 0,
            duration: 300
        }).start()
    }

    showSidebar(){

        Animated.timing( this.animatedSidebar, {
            toValue: 0,
            duration: 300
        }).start()

        Animated.timing( this.animatedOverlay, {
            toValue: .6,
            duration: 300
        }).start()
    }

    render() {

        return (
            <View style={this.styles.container()}>
                {/* OVERLAY */}
                { this.props.open && <TouchableWithoutFeedback onPress={this.props.onOverlayPress}>
                    <Animated.View  style={this.styles.overlay()}/>
                </TouchableWithoutFeedback> }

                {/* MENU */}
                <Animated.View style={this.styles.sidebar()}>
                    <View style={this.styles.header()}>
                        <TouchableOpacity style={this.styles.menu()} onPress={this.props.onOverlayPress}>
                            <Icon name="bars" size={30} color='whitesmoke' />
                        </TouchableOpacity>
                    </View>
                    <SidebarMenu/>
                </Animated.View>
            </View>
        )
    }
}
