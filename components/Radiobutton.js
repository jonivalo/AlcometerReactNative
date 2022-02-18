import React,{ useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import styles from '../styles/Styles';


export default function Radiobutton({ options, onPress }) {
  
  const [value, setValue] = useState(null);

  function handlePress (selected) {
      setValue(selected);
      onPress(selected);
  }
  
  
    return (
    <>
      {
        options.map((item) => (
            <View key={item.value} style={styles.buttonContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                 {value === item.value && <View style={styles.checkedCircle} />}
            </Pressable>
            </View>

      ))}
    </>
  );
}

