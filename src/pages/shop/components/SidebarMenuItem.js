import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SideBarMenuItem extends React.Component {

    static propTypes = {
        icon: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        onPress: React.PropTypes.func.isRequired
    }
    

    render() {
        return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Icon name={this.props.icon} size={30} color="whitesmoke"/>
                </View>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    }
}

const styles = {
    container: {
        height: 50,
        margin: 3,
        backgroundColor: 'steelblue',
        flexDirection: 'row'
    },
    iconWrapper: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelWrapper: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    label: {
        fontSize: 25,
        color: 'whitesmoke'
    }
}