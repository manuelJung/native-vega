import React from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import ViewPager, { DataSource } from 'react-native-viewpager'
import Shop from '../pages/shop'

export default class AppContainer extends React.Component {
    
    static propTypes = {
        store: React.PropTypes.object.isRequired,
        pages: React.PropTypes.arrayOf(
            React.PropTypes.node
        ).isRequired
    }

    componentWillMount(){
        this.dataSource = new DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        }).cloneWithPages(this.props.pages)
    }

    shouldComponentUpdate(){
        return false
    }

    _renderPage(data, pageId){
        return data
    }

    render(){
        const { store } = this.props

        
        return (
            <Provider store={store}>
                <ViewPager
                    style={{ flex: 1 }}
                    dataSource={this.dataSource}
                    renderPage={this._renderPage}
                    isLoop={false}
                    keyboardShouldPersistTaps={true}
                    renderPageIndicator={false}
                    autoPlay={false}/>
            </Provider>
        )
        
        /*return (
            <Provider store={store}>
                <Shop/>
            </Provider>
        )*/
    }
}

const styles = {
    
}