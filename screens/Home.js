import React from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker 
                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                // description="hna baghi tji "
                // pinColor='gold'
                >
                <Callout 
                ><Text>This is haha  calout</Text></Callout>
                </Marker>
                <Circle center={{latitude: 37.78825, longitude: -122.4324,}} radius={100}></Circle>
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