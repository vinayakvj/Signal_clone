import React from 'react';
import {StatusBar, View, Text, Image, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={require('../img/signalIcon.png')}
        style={{width: 150, height: 150}}
      />
      <View>
        <Input placeholder="Email" autoFocus type="email" />
        <Input placeholder="Password" autoFocus type="password" />
      </View>
    </View>
  );
};

/* const styles = StyleSheet.create({
  inputContainer: {},
}); */

export default LoginScreen;
