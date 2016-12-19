import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import LabelImage from './components/LabelImage'

export default class ShopLayout extends React.Component {

    static propTypes = {

    }

    state = {
        sidebarOpen: false
    }

    openSidebar = () => this.setState({ sidebarOpen: true })
    closeSidebar = () => this.setState({ sidebarOpen: false })

    render(){
        return (
            <View style={styles.container}>
                <Header onMenuPress={this.openSidebar}/>

                <ScrollView>

                    <Image 
                        style={styles.image} 
                        source={{ uri: 'http://media.vega-direct.com/media//vega/home/dach/teaser/versandkostenfrei-button.jpg '}}
                    />
                    
                    <Card label="Vega - Ihr Partner für Gastronomiebedarf">
                        <Text style={styles.cardText}>
                            Die führende Marke für Hotellerie, Catering- und Gastronomiebedarf.
                        </Text>
                    </Card>

                    <Card style={styles.gallery}>
                        <LabelImage
                            label='Winter-SALE'
                            src='http://media.vega-direct.com/media//vega/home/dach/small/sale.jpg'
                            style={{width: 185, height: 170}}
                        />
                        <LabelImage
                            label='Weihnachtswelt'
                            src='http://media.vega-direct.com/media//vega/home/dach/small/w-dekowelten3.jpg'
                            style={{width: 185, height: 170}}
                        />
                        <LabelImage
                            label='Buffet-Saison'
                            src='http://media.vega-direct.com/media//vega/home/dach/small/buffet2.jpg'
                            style={{width: 185, height: 170}}
                        />
                        <LabelImage
                            label='Personalisierung'
                            src='http://media.vega-direct.com/media//vega/home/dach/small/personalisierung-alle.jpg'
                            style={{width: 185, height: 170}}
                        />
                    </Card>

                    <Card label='Unsere Produkt-Highlights' style={styles.gallery}>
                        <LabelImage
                            label={`Porzellan-Serie\nSKYLINE`}
                            src='http://media.vega-direct.com/media//vega/home/dach/heros/skyline.jpg'
                            style={{width: 185, height: 170}}
                        />
                        <LabelImage
                            label={`Glas-Serie\nVINENZA`}
                            src='http://media.vega-direct.com/media//vega/home/dach/heros/vinzenza.jpg'
                            style={{width: 185, height: 170}}
                        />
                        <LabelImage
                            label={`Besteck-Serie\nBRILIO`}
                            src='http://media.vega-direct.com/media//vega/home/dach/heros/brilio.jpg'
                            style={{width: 185, height: 170}}
                        />
                        <LabelImage
                            label={`Möbel-Serie\nTEATRO`}
                            src='http://media.vega-direct.com/media//vega/home/dach/heros/teatro.jpg'
                            style={{width: 185, height: 170}}
                        />
                    </Card>

                </ScrollView>

                <Sidebar open={this.state.sidebarOpen} onOverlayPress={this.closeSidebar}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    image: {
        height: 250
    },
    gallery: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap'
    },
    cardText: {
        fontSize: 18
    }
}