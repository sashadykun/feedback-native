//index.ios.js - place code in here for IOS!!!

// import a library to help create a cmponent

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';



// crecte a component
const App = () => {
    return (
        <View style={{ flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};




// render it to the device

AppRegistry.registerComponent('albums_with_native', () => App);