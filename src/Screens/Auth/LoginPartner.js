import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";

import logo from '../../../assets/loginLogo.png'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        email: '',
        password: ''
      },
      showToast: false,
      isLoading: false,
    }
  }

  handleSignup = () => {
    this.props.navigation.navigate('RegisterPartner')
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
  }

  handleSubmit = async () => {
    this.props.navigation.navigate('HomePartner')
    
  }

  render() {
    const {isLoading, formData} = this.state
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title}>Please login if you already a partner</Text>
            <TextInput
              placeholder="Email"
              keyboardType='email-address'
              value={formData.email}
              onChangeText={(text)=>this.handleChange('email',text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text)=>this.handleChange('password',text)}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.center}>
              <Text style={styles.bottomText}>Don't have an account ? &nbsp;
                <Text
                  style={styles.bottomTextLink}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  Register
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Login
const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: '#1AB0D3',
    },
    content:{
      width: "70%",
      height: "100%",
      justifyContent: 'center',
      alignSelf: 'center',
      flex: 1
    },
    title:{
      marginBottom: 30,
      color: "#F3F1F3",
      alignSelf: 'center',
      fontSize: 15
    },
    input:{
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#ddd6f3',
      width: '100%',
      borderRadius: 10,
      marginBottom: 15,
    },
    logo:{
      width: 180, 
      height:180,
      alignSelf: 'center',
      marginBottom: 5,
    },
    buttonContainer: {
      height: 35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 20,
      width: 160,
      borderRadius: 20,
    },
    loginButton: {
      backgroundColor: '#1C8CD1',
      height: 45,
      fontSize: 20,
      marginVertical: 15,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
    },
    center:{
      alignSelf: 'center'
    },
    bottomText: {
      fontSize: 15,
      color: '#ccc',
    },
    bottomTextLink: {
      color: '#fff',
      fontWeight: 'bold',
    },
});