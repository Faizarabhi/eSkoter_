import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
const CustomCard = ({ data }) => {
    // console.log('/----------------------- another one-------------------------/')
    // console.log(data,'custimaze')

    let state = data.data
    const img = state.img.replace(/\${([^}]*)}/g)
    console.log(img)
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.card}>
                <Text>{state.wind.deg}°C</Text>
                <Image source={img} style={styles.img} />
                <Text>{state.desc}</Text>
                <Text style={styles.day}>{state.wind.speed}</Text>
                <Text style={styles.deg}>+{state.temp}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default CustomCard
// #0a9dfb, #84d4fc, #447494, #5484ac, #adc594, #2c4454 
const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
        backgroundColor: '#0a9dfb',
        opacity: 0.7,
        margin: 10,
        height: '60%',
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10,
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    day: {
        fontSize: 30,
        fontWeight: Platform.OS === 'android' ? 'normal' : '300',
        color: '#84d4fc'
    },
    deg: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    }
})