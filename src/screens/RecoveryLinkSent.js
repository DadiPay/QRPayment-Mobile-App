import React, { useEffect } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import EnvelopeSVG from '../assets/svgs/EnvelopeSvg.js'
import UnlockWhiteSvg from '../assets/svgs/UnlockWhiteSvg.js'

const windowHeight = Dimensions.get('window').height;

const RecoveryLinkSent = ({ navigation }) => {
  let timer

  useEffect(() => {
    timer = setTimeout(() => {
      navigation.navigate('Password_Otp')
    }, 5000);

    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.contentContainer}>

          <Header title='Password Recovery' icon={UnlockWhiteSvg} />

          {/* Description */}
          <View style={styles.textContainer}>
            <Text style={styles.text} >
              A link has been sent to your mail, kindly click the link to recover your password
            </Text>
            {/* <Pressable>
              <Text>Back home</Text>
            </Pressable> */}
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
  }
})

export default RecoveryLinkSent
