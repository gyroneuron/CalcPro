import { View, Text, StyleSheet, UseState, Button, StatusBar, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
const Width = Dimensions.get('window').width //Taking Dimensions of device


const App = () => {

  const [value, setValue] = useState('0')  //Using Fork 

  const buttonPress = (val) => {  //Function called on pressing a button
    if(val == 'AC')     //If 'AC' Button is pressed
    setValue('0')

    else if (val == 'M'){     // If 'M' button is pressed
      setValue(value.slice(0,-1))
    }

    else if(val == '='){      //On Pressing Calculate button
      try{
        if (value.slice(-1) == '+' || value.slice(-1) == '-' ||  //Checking if last element is a sign 
            value.slice(-1) == '*' || value.slice(-1) == '/') {
          setValue(`${eval(value.slice(0, -1))}`)                // Removing last sign before calculating
      }
      else {
          setValue(`${eval(value)}`)
      }
      }
      catch{
        setValue(" Format Error")     //Catch block For handling errors
      }
    }

    else if(isNaN(val)){
      if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.')
        setValue(value.slice(0,-1) + val)       //If a sign is already present, replace that sign with new sign 
      else
        setValue(value + val)
    }

    else {
      if(value == '0'){  //For replacing starting zero with number

        if(isNaN(val)){   //for not replacing zero with sign
          setValue(value + val)
        }
        else {
          setValue(val)   //normal condition
        }
      }

      

      else{
        setValue(value + val) //for input of  numbers without performing calculation: using concatination
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#BF55EC'}/>
        <View style={styles.resultSection}>
          <Text style={styles.resultText}>{value}
          </Text>

        </View>
      <View style={styles.buttonSection}>
      <TouchableOpacity
        onPress={() => {buttonPress('AC')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> AC </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('M')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> M </Text></View></TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {buttonPress('%')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> % </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('/')}}>
          <View style={[styles.buttonAppearance,
             styles.yelloButton]}><Text style={[styles.buttonText]}> / </Text></View></TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {buttonPress('7')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 7 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('8')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 8 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('9')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 9 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('*')}}>
          <View style={[styles.buttonAppearance,
             styles.yelloButton]}><Text style={styles.buttonText}> * </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('4')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 4 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('5')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 5 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('6')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 6 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('-')}}>
          <View style={[styles.buttonAppearance,
             styles.yelloButton]}><Text style={styles.buttonText}> - </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('1')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 1 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('2')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 2 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('3')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> 3 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('+')}}>
          <View style={[styles.buttonAppearance,
             styles.yelloButton]}><Text style={styles.buttonText}> + </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('0')}}>
          <View style={[styles.buttonAppearance,
             styles.longButton]}><Text style={styles.buttonText}> 0 </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('.')}}>
          <View style={styles.buttonAppearance}>
            <Text style={styles.buttonText}> . </Text></View></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {buttonPress('=')}}>
          <View style={[styles.buttonAppearance,
             styles.greenButton]}><Text style={styles.buttonText}> = </Text></View></TouchableOpacity>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems:'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  resultText: {
    fontSize: 80,
    color: '#2B2B52',
    margin: 10,
  },
  buttonSection: {
    flex:1.15,
    padding: 11,
    width: Width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#8B78E6',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#8B78E6'
  },

  buttonAppearance: {
    marginHorizontal: 13,
    marginTop: 14,
    height: 75,
    width: 75,
    borderRadius: 75/2,
    backgroundColor: '#2B2B52',
    alignItems: 'center',
    justifyContent: 'center',
},

longButton: {
  height: 70,
  width: 168,
  borderRadius: 70/2,
  alignItems: 'flex-start',
  paddingHorizontal: 18
},

yelloButton: {
  backgroundColor: '#F4C724'
},

greenButton: {
  backgroundColor: '#8B78E6',
  borderColor: 'white',
  borderWidth: 1
},

buttonText: {
  fontSize: 37,
  color: '#ffffff',
  fontWeight: 'bold'
}
})