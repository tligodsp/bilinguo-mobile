import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.introduction}>
        <Image
          source={ require('./assets/communism_ftw.png') }
          style={{ width: 200, height: 200 }}
          containerStyle={{ overflow: "hidden", borderRadius: 10 }}
        />
        <Text style={styles.introductionText}>Learn English for free.</Text>
        <Text style={styles.introductionText}>Forever.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Get Started"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
        />
        <Button 
          title="I already have an account"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          type="outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introduction: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
  introductionText: {
    fontSize: 22,
    marginTop: 10
  },
  buttonContainer: {
    marginBottom: 30,
    textTransform: "uppercase"
  },
  button: {
    height: 50,
    width: "100%",
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 2
  },
  buttonText: {
    textTransform: "uppercase"
  }
});
