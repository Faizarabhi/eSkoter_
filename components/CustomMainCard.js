import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CustomMainCard = ({data}) => {
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.right}>
                <Image style={styles.img} source={require('../../assets/cloudy.png')} />
            </View>
            <View style={styles.left}>
                <View style={styles.card}>
                    <Text>{data.date}</Text>
                    <Text style={styles.day}>{data.day} </Text>
                    <Text style={styles.deg}>+{data.temp}</Text>
                    <View style={styles.temp}>
                        <Text>{data?.wind?.gust} mph</Text>
                        <MaterialCommunityIcons name="weather-windy" size={24} color="white" />
                        <Text>{data?.wind?.speed} km/h</Text>
                        <MaterialCommunityIcons name="fan-speed-1" size={24} color="white" />
                    </View>
                    <View style={styles.temp}>
                        <Text style={styles.deg}>{data.temp_max}°</Text>
                        <MaterialCommunityIcons name="arrow-down-thin" size={24} color="white" />
                        <Text style={styles.deg}>{data.temp_min}°</Text>
                        <MaterialCommunityIcons name="arrow-up-thin" size={24} color="white" />
                    </View>

                </View>

            </View>

        </TouchableOpacity>
    )
}
export default CustomMainCard

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    left: {
        // backgroundColor: 'yellow',
        width: '100%',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        // backgroundColor: 'green',
        width: '100%',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {

        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    temp: {
        flexDirection: 'row',
    },
    text: {
        color: 'white'

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    day: {
        fontSize: 30,
        fontWeight: Platform.OS === 'android' ? 'normal' : '300',
        color: 'black'
    },
    deg: {
        fontSize: 20,
        fontWeight: Platform.OS === 'android' ? 'normal' : '400',
        color: 'white'
    }
})