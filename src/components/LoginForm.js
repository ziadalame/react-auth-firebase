//import liraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';

// create a component
class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />

                <CardSection>
                    <Button onPress={() => console.log('ziad')}>
                        <Text>LogIn</Text>
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

//make this component available to the app
export default LoginForm;
