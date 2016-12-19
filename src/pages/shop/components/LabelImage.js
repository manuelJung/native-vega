import React from 'react'
import { View, Text, Image } from 'react-native'

export default class LabelImage extends React.Component {

    static propTypes = {
        src: React.PropTypes.string.isRequired,
        style: React.PropTypes.object,
        label: React.PropTypes.string
    }

    render(){

        return (
            <View style={[styles.container, this.props.style]}>
                <Image style={styles.img} source={{ uri: this.props.src }}/>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}>
                        {this.props.label}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = {
    // View
    container: {
        width: 170,
        height: 170,
        marginBottom: 5,
        marginTop: 5
    },
    // Image
    img: {
        flex: 1
    },
    // View
    labelWrapper: {
        backgroundColor: '#2a4c85',
        padding: 5
    },
    // Text
    label: {
        color: 'whitesmoke',
        fontSize: 20
    }
}