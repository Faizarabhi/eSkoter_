import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
const CustomButton = ({ screen, sujet }) => {
    const navigation = useNavigation();
    const screenNavigate = screen
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(screenNavigate)}>
                <Text style={styles.text}>{sujet}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CustomButton
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a9dfb",
        padding: 10,
        borderRadius: 5,
        justifyContent: "flex-center",
        width: "100%",
        marginVertical: "5%"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,

    },

});