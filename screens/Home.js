import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as location from 'expo-location'

export default function Home() {
    const [pin, setPin] = useState({latitude:13.406,longitude:123.3753})
    useEffect(()=>{
        (async()=>{
            let {status}= await location.requestForegroundPermissionAsync();
            if(status !== "granted"){
                console.log("Permision denied")
                return
            }
             location = await location.getCurrentPositionAsync({})
            setPin({ latitude: e.nativeEvent.latitude, longitude: e.nativeEvent.longitude })
        })
    },[])
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 32.293391484765614,
                    longitude: -9.235166713884807,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                onUserLocationChange={(e) => {
                    // console.log("user location change", e.nativeEvent.coordinate.altitude,'||', e.nativeEvent.coordinate.longitude)
                    setPin({ latitude: e.nativeEvent.latitude, longitude: e.nativeEvent.longitude })
                }}>
                <Marker
                    coordinate={{latitude: 32.293391484765614,
                        longitude: -9.235166713884807}}
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Drag Start", e.nativeEvent.coordinate)

                    }}
                    onDragEnd={(e)=>{
                        console.log("Drag End", e.nativeEvent.coordinate)
                    }}

                // description="hna baghi tji "
                pinColor='gold'
                >
                    <Callout
                    ><Text>This your destination</Text></Callout>
                </Marker>
                <Circle center={{ latitude: 37.78825, longitude: -122.4324, }} radius={100}></Circle>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});