import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const profil = {}
    
 function dispatch() {}
    return (
    <View style={styles.box}>
      <Text>Login</Text>
        <Text>{JSON.stringify(profil)}</Text>
    <Button onPress={() => dispatch({type : "LOGIN"})} title="login" />
    <Button onPress={() => dispatch({type : "LOGOUT"})} title="logout" />
        <TextInput placeholder='Entrez votre email' style={styles.input} />
        <TextInput placeholder='Entrez votre password' style={styles.input} />
        <TextInput placeholder='commentaire' multiline={true} numberOfLines={5} style={[styles.input]} />   
    <Button title="Soumettre" onPress={() => {}} />
    </View>
  )
    }


export default Login

const styles = StyleSheet.create({
    box : { paddingHorizontal : 10 , alignItems : 'flex-start'},
    input : { borderColor : "black", padding : 5 , borderWidth : 1 , marginBottom : 10 , width : "100%" }
})
