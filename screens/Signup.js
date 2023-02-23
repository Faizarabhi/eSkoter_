import {
    Text,
    View,
    StyleSheet,
    Image,
    SafeAreaView} from 'react-native'
import { 
    CustomButton,
    CustomInput
        } from '../components';
const Signup = ()=>{
    return(
        <View style={styles.container}>
       <View style={styles.main}>
          {/* <Image source={require('../../assets/login.png')} style={styles.img} /> */}
        </View>
        <View style={styles.form}>
        <Text style={styles.text}>Create Account with us:</Text>
        <CustomInput type='user name' icon='account' label='true' />
        <CustomInput type='email' icon='email' label='true' />
        <CustomInput type='password' icon='account-lock' label='true' />
        <CustomButton screen="Login" sujet="Already you have Account"/>
        </View>
        </View>
        
    )
}
export default Signup;

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
    fontSize: 30,
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