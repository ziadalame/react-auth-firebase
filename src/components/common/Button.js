//import liraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// create a component
const Button = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
);

// define your styles
const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
};

//make this component available to the app
export { Button };
