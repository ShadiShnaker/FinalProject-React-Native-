import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from 'firebase/app';
import 'firebase/auth';

const SettingsScreen = ({ navigation }) => {

  const signOut = async () =>{
    try{
      await firebase.auth().signOut()
      navigation.navigate('Welcome');
    }catch(error){
      alert('Unable to sign out right now');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 70 }}>Settings</Text>
      <Button title='Lof Off' onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default SettingsScreen;
