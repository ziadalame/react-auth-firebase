//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

// create a component
class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyAf2xMF9v3hk_NYW2CT87PoCPSOawZgMJ4',
            authDomain: 'react-native-test-68ab6.firebaseapp.com',
            databaseURL: 'https://react-native-test-68ab6.firebaseio.com',
            storageBucket: 'react-native-test-68ab6.appspot.com',
            messagingSenderId: '227416283478'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    // <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
                        </CardSection>
                    // </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <View style={{ elevation: 1, marginTop: 20 }}>
                    {this.renderContent()}
                </View>
            </View>
        );
    }
}

//make this component available to the app
export default App;
