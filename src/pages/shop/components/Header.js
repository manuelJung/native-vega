import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Header extends React.Component {

    static propTypes = {
        onMenuPress: React.PropTypes.func.isRequired
    }

    render() {
        return (
        <View style={styles.container}>
            {/* MENU ICON */}
            <TouchableOpacity style={styles.icon} onPress={this.props.onMenuPress}>
                <Icon name="bars" size={30} color='whitesmoke'/>
            </TouchableOpacity>

            {/* HEADLINE */}
            <View style={styles.headlineWrapper}>
                 <Text style={styles.headline}>Headline</Text>
            </View>

            {/* SEARCH ICON */}
            <TouchableOpacity style={styles.icon}>
                <Icon name="search" size={30} color='whitesmoke'/>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = {
    container: {
        height: 50,
        backgroundColor: '#2a4c85',
        flexDirection: 'row'
    },
    icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headlineWrapper: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    headline: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'whitesmoke'
    }
}