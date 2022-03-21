import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native' 
import {createStackNavigator} from '@react-navigation/stack'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway';

function Register({navigation}){
  return(
    <View style={styles.container}>
      
      <Image source={require('./assets/image3.png')} style={[{width:400, height:300}]}/>
      
      <View>  
        <Text style={styles.head}>Enterprise team collaborations.</Text>
        <Text style={styles.paragraph}>Bring together your files, your tools, projects and people. Including a new mobile and desktop application</Text>
      </View>

      <View style={{flexDirection:"row",marginTop:50}}>
        <TouchableOpacity style={styles.SubmitButtonStyle2} activeOpacity = { .5 }>
          <Text style={styles.TextStyle2}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 }>
          <Text style={styles.TextStyle1} onPress={()=>navigation.navigate('Login')}> Login </Text>
        </TouchableOpacity>
      </View>

    </View>
)}

function Login({navigation}){
  return(
    <View style={styles.container}>
        <Text style={{color:"#fff", fontFamily:"Raleway_700Bold", fontSize:50,fontWeight:"bold", marginLeft:30, marginRight:40,}}>Let's sign you in.</Text>
        <Text style={{color:"#fff", fontFamily:"Raleway_700Bold", fontSize:30, fontWeight:"bold", marginLeft:30, marginRight:40,}}>Welcome back.</Text>
        <Text style={{color:"#fff", fontFamily:"Raleway_700Bold", fontSize:30, fontWeight:"bold", marginLeft:10, marginRight:20,}}>You've been missed!</Text>
      
        <TextInput style={{height:60,width:350, fontFamily:"Raleway_400Regular",color:'#fff',padding:20, marginTop:20, borderRadius:10,borderWidth: 3,
                borderColor: '#000', backgroundColor: "#fff",  fontSize:15}} placeholder="Phone, email or username"></TextInput>
        <TextInput style={{height:60,width:350, fontFamily:"Raleway_400Regular",color:'#fff', marginTop:20, borderRadius:10,borderWidth: 3,
                borderColor: '#000', backgroundColor: "#fff", padding:20, fontSize:15}} placeholder="Password"></TextInput>
        <Text style={{color:"#fff",fontFamily:"Raleway_400Regular", fontSize:16,  marginTop:120,}}>Don't have an account? Register</Text>
        
        <View style={{flexDirection:"row",marginTop:10}}>
            <TouchableOpacity style={styles.SubmitButtonStyle3} activeOpacity = { .5 }>
                <Text style={styles.TextStyle3} onPress={()=>navigation.navigate('Register')}> Register </Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}
const Stack =createStackNavigator()

export default function App(){
  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head:{
    fontSize:45,
    fontFamily:"Raleway_700Bold",
    padding:10,
    color:'#fff',
    fontWeight:"bold",
    marginLeft:30,
    marginRight:40,
    lineHeight:70
  },
  paragraph:{
    color:'#fff',
    fontFamily:"Raleway_400Regular",
    fontSize:20,
    marginLeft:40,
    marginRight:40,
    lineHeight:40,
  },
  register_button:{
    color:"#fff",
    backgroundColor:"#000",
    
  },
  login_button:{
    color:"#000",
    backgroundColor:"#fff",
    fontFamily:"Raleway_700Bold",
  },
  SubmitButtonStyle: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:10,
    marginRight:30,
    backgroundColor:'#708090',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#708090',
    width:120
  },
  SubmitButtonStyle2: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:120
  },
 
  TextStyle1:{
      color:'#fff',
      textAlign:'center',
      fontFamily:"Raleway_700Bold",
  },
  TextStyle2:{
    color:'#000',
    textAlign:'center',
    fontFamily:"Raleway_700Bold",
},
SubmitButtonStyle3: {
 
          marginTop:10,
          paddingTop:15,
          paddingBottom:15,
          marginLeft:30,
          marginRight:30,
          backgroundColor:'#fff',
          borderRadius:10,
          borderWidth: 1,
          borderColor: '#fff',
          width:350
    } ,
    TextStyle3:{
      color:'#000',
      textAlign:'center',
      fontSize:20,
      fontFamily:"Raleway_700Bold"
  }
});
