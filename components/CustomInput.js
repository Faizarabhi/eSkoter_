import * as React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Text
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomInput = ({ type, icon, label, handleChange }) => {

    return (
        <View style={styles.container}>
            {label ?
                <Text style={styles.label} >{type}:</Text> : ''}
            <MaterialCommunityIcons name={icon} size={24} style={styles.icon} color="black" />
            <TextInput
                label={type}
                style={styles.input}
                placeholder={type}
                onChange={handleChange}
            />

        </View>
    )
}
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
export default CustomInput
const styles = StyleSheet.create({
    container: {

    },
    label: {
        fontSize: 25,
        textTransform: 'capitalize',
        marginVertical: 5
    },
    input: {
        borderColor: "#0a9dfb",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5
    },
    icon: {
        position: "absolute",
        bottom: 12,
        right: 20,
        color: '#0a9dfb'
    }
})