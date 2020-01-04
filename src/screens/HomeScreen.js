import React from 'react';
import { Text, StyleSheet,Button,View ,TouchableOpacity} from 'react-native';

const HomeScreen = () => {
 
  return (
    <View>
    <Text style={styles.text}>Hi there</Text>
    <Button
      title = "Go to components Demo"
      onPress={()=>{
        console.log("button Pressed")
      }}
    />
    <TouchableOpacity 
     onPress={()=>{
        console.log("opacity Pressed")
      }}
    >
      <Text>Go to list Demo</Text>
     
    </TouchableOpacity>
    </View>
 );
 

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
