import React from 'react'
import { View, Text } from 'react-native'

export default class Card extends React.Component {

    static propTypes = {
        fullWidth: React.PropTypes.bool,
        label: React.PropTypes.string,
        children: React.PropTypes.node.isRequired,
        style: React.PropTypes.object
    }

    render(){

        return (
            <View style={[styles.container]}>
                { this.props.label && <View style={styles.labelWrapper}>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>}
                <View style={this.props.style}>
                    { this.props.children }
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'whitesmoke',
        padding: 10,
        margin: 5
    },
    labelWrapper: {
        borderBottomWidth: 2,
        borderColor: '#2a4c85',
        paddingBottom: 10,
        marginBottom: 10
    },
    label: {
        fontSize: 20,
        color: '#2a4c85'
    }
}