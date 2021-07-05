import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';

const DissmissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function ButtonTouchablePressable() {
  const [Name, SetName] = useState('');
  const [Submitted, SetSubmitted] = useState(false);
  const ButtonHandler = () => {
    SetSubmitted(!Submitted);
  };
  // if (!Submitted) {
  //   SetName('')
  // }
  return (
    <DissmissKeyboard>
      <View style={styles.body}>
        <Text style={styles.text}>Please Enter Your Name</Text>
        <TextInput
          placeholder="e.g Muhib Kamali"
          style={styles.input}
          onChangeText={name => SetName(name)}
        />
        {/* <Button
                    title={Submitted?  'Clear' : 'Submit'}
                    onPress={ButtonHandler}
                    // disabled={Submitted}
                    color='#00F'
                /> */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={ButtonHandler}
          activeOpacity={0.9}
        >
          <Text style={styles.text}>
            {Submitted ? 'Clear' : 'Submit'}
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableHighlight
          style={styles.button}
          onPress={ButtonHandler}
          activeOpacity={0.5}
          underlayColor='#E4E4E4'
        >
          <Text style={styles.text}>
            {Submitted ? 'Clear' : 'Submit'}
          </Text>
        </TouchableHighlight> */}
        {/* <TouchableWithoutFeedback
          onPress={ButtonHandler}
        >
          <View style={styles.button}>
            <Text style={styles.text}>
              {Submitted ? 'Clear' : 'Submit'}
            </Text>
          </View>
        </TouchableWithoutFeedback> */}
        <Pressable
          onPress={ButtonHandler}
          // onLongPress={ButtonHandler}
          // delayLongPress={2000}
          // hitSlop={{ top: 10 , bottom: 10 , left: 10 , right: 10}}
          android_ripple={{color:'00f'}}
          style={({ pressed }) => 
            [
              styles.button,
              { backgroundColor: pressed ? '#2D8D5D' : '#86D6AE' }
            ]
          }
        >
          <Text style={styles.text}>
            {Submitted ? 'Clear' : 'Submit'}
          </Text>
        </Pressable>
        {Submitted ? (
          <Text style={styles.text}>Your Registered as {Name}</Text>
        ) : null}
      </View>
    </DissmissKeyboard >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: 300,
    color: 'black',
    borderColor: 'grey',
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    // backgroundColor: '#86D6AE',
  },
});

export default ButtonTouchablePressable;
