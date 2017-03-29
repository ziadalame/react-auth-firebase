//import liraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

// create a component
class LoginForm extends Component {

    state = { 
        email: '',
        password: '',
        error: ''
    };

    onButtonPress() {
        const { email, password } = this.state;
        
        // Clear error
        this.setState({ error: '' });
        
        // Authenticate with firebase
        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({ error: 'Authentication Failed' });
            });
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errortextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        <Text>LogIn</Text>
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errortextStyle: {
        fontSize: 20,
        color: '#FF0000',
        alignSelf: 'center'
    }
};

//make this component available to the app
export default LoginForm;
