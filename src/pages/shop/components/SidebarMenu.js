import React from 'react';
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SidebarMenuItem from './SidebarMenuItem'

export default class SidebarMenu extends React.Component {

    static propTypes = {
        
    }


    render() {
        return (
        <ScrollView style={styles.container}>
            <SidebarMenuItem icon="home" label="Startseite" onPress={console.log}/>
            <SidebarMenuItem icon="tachometer" label="Dashboard" onPress={console.log}/>
            <SidebarMenuItem icon="first-order" label="Bestellungen" onPress={console.log}/>
            <SidebarMenuItem icon="money" label="Finanzen" onPress={console.log}/>
            <SidebarMenuItem icon="user" label="Account" onPress={console.log}/>
            <SidebarMenuItem icon="sign-out" label="Logout" onPress={console.log}/>
        </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
    }
}