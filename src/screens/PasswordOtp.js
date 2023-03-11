import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import UnlockWhiteSvg from '../assets/svgs/UnlockWhiteSvg.js'
import HiddenPin from '../components/atoms/HiddenPin.js'


const windowHeight = Dimensions.get('window').height;
const pinValueLength = 5
const totalBoxes = Array.from(Array(pinValueLength))


const PasswordOtp = ({ navigation }) => {
  const [pinValue, setPinValue] = useState('')
  const handleTextChange = (value) => {
    if (value.length > pinValueLength) return
    setPinValue(value)
  }

  useEffect(() => {
    pinValue.length === pinValueLength && navigation.navigate('Create_New_Password', { pinValue })
  }, [pinValue])


  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.contentContainer}>

          <Header title='Password Recovery' icon={UnlockWhiteSvg} subtitle='Enter the code sent to your phone number' />


          <View style={styles.pinUiInput}>
            <View style={styles.hiddenPinContainer}>
              {totalBoxes.map((item, key) => (
                <HiddenPin small key={key} filled={(pinValue.length > key)} />
              ))}
            </View>
            <TextInput style={styles.hiddenInput} value={pinValue} onChangeText={handleTextChange} autoFocus keyboardType='decimal-pad' />
          </View>
        </View>


      </View>
    </AppLayout>
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

  },
  contentContainer: {
    paddingHorizontal: 14,
    // height: '92%',
    flex: 1,
    // borderWidth: 2
  },
  textContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.inputBorder,
    borderStyle: 'solid',
    padding: 13,
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: colors.black
  },
  pinUiInput: {
    position: 'relative',
    alignItems: 'center',
  },
  hiddenPinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,

  },
  hiddenInput: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 'auto',
    right: 'auto',
    zIndex: 1,
    width: '100%',
    height: '100%',
    marginHorizontal: 'auto',
    borderWidth: 1
  },

})

export default PasswordOtp
