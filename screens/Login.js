import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from "react-native";
import { CustomInput, Header, CustomButton } from "../components";
const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/* <Image source={require('../../assets/login.png')} style={styles.img} /> */}
      </View>
      <View style={styles.form}>
        <Text style={styles.text}>Log with us</Text>
        <CustomInput type='email' icon='email' label='true' handleChange={(e) => {setEmail(e.target.value);console.log(email)} } value={email} />
        <CustomInput type='password' icon='account-lock' label='true' handleChange={(e) => setPassword(e.target.value)} value={password} />
        {/* <CustomButton screen="Home" sujet='Log in' /> */}
        <CustomButton screen="Signup" sujet='Create Account' />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 50,
    color: '#0a9dfb',
    paddingLeft: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  }

});