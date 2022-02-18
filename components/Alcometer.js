import React,{ useState } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import Radiobutton from './Radiobutton';
import {Provider as PaperProvider, Button, TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles/Styles';

export default function Alcometer() {
    
    const [weight, setWeight]= useState('');
    const [bottle, setBottle]= useState(1);
    const [time, setTime]= useState(1);
    const [gender, setGender]= useState('male');
    const [drunk, setDrunk]= useState(0);

    const genders =[
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
    ];

    const bottles = [
      {label: '1 bottle', value: 1},
      {label: '2 bottles', value: 2},
      {label: '3 bottles', value: 3},
      {label: '4 bottles', value: 4},
      {label: '5 bottles', value: 5},
      {label: '6 bottles', value: 6},
      {label: '7 bottles', value: 7},
      {label: '8 bottles', value: 8},
      {label: '9 bottles', value: 9},
      {label: '10 bottles', value: 10},
      {label: '11 bottles', value: 11},
      {label: '12 bottles', value: 12},
      {label: '13 bottles', value: 13},
      {label: '14 bottles', value: 14},
      {label: '15 bottles', value: 15},
      {label: '16 bottles', value: 16}
    ];
  
    const hours = [
      {label: '1 hour', value: 1},
      {label: '2 hours', value: 2},
      {label: '3 hours', value: 3},
      {label: '4 hours', value: 4},
      {label: '5 hours', value: 5},
      {label: '6 hours', value: 6},
      {label: '7 hours', value: 7},
      {label: '8 hours', value: 8},
      {label: '9 hours', value: 9},
      {label: '10 hours', value: 10},
      {label: '11 hours', value: 11},
      {label: '12 hours', value: 12},
      {label: '13 hours', value: 13},
      {label: '14 hours', value: 14}
    ];

    function calculate(){
    
      if (weight === '' || weight ==='0'){
        return;
      } else {
      let result = 0
      let litres = bottle * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsLeft = grams - burning * time;
        
  
        if (gender== "male"){
          result = gramsLeft / (weight * 0.7)
    
        } else {
          result = gramsLeft / (weight * 0.6)
    
        } if (result < 0 ) {
          result = 0;
        }
        
          setDrunk(result);
        }
      } 
    


  return(
    
    <PaperProvider>
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Text style={styles.header}>Alcometer</Text>
    <Text style={styles.field}>Weight</Text>
    <TextInput 
    
    style={{marginBottom:20}} 
    keyboardType='numeric'
    onChangeText={text => setWeight(text)}
    value={weight}
  />
    
    <Radiobutton 
      options={genders} 
      onPress={(value) => {setGender(value)}}
    />
    
      <Picker
            onValueChange = {(itemValue) => setBottle(itemValue)}
            selectedValue = {bottle} >
              {bottles.map((bottle,index) => (
                <Picker.Item key = {index} label = {bottle.label} value = {bottle.value} />
              ))}
        </Picker>

        <Picker
            onValueChange = {(itemValue) => setTime(itemValue)}
            selectedValue = {time} >
              {hours.map((time,index) => (
                <Picker.Item key = {index} label = {time.label} value = {time.value} />
              ))}
        </Picker>
      <Button 
      onPress={calculate}
      mode='contained'
      color='#63d1eb'
      >Press this buttone</Button>
      <Text style={[drunk <0.80 ? styles.Low : drunk < 1.80 ? styles.Middle : styles.High ]}>
          {drunk.toFixed(2)}
          </Text>
      </ScrollView>
      </SafeAreaView>
    </PaperProvider>
    
  );
}