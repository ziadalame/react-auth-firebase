//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

// create a component
class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyAf2xMF9v3hk_NYW2CT87PoCPSOawZgMJ4',
            authDomain: 'react-native-test-68ab6.firebaseapp.com',
            databaseURL: 'https://react-native-test-68ab6.firebaseio.com',
            storageBucket: 'react-native-test-68ab6.appspot.com',
            messagingSenderId: '227416283478'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

//make this component available to the app
export default App;
