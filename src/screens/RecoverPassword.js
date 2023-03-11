import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout, { globalStyle } from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import EnvelopeSVG from '../assets/svgs/EnvelopeSvg.js'
import UnlockWhiteSvg from '../assets/svgs/UnlockWhiteSvg.js'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import VerifyBadgeSvg from '../assets/svgs/VerifyBadgeSvg'
import PrimaryButton from '../components/atoms/Button'

const windowHeight = Dimensions.get('window').height;

const RecoverPassword = ({ navigation }) => {

  return (
    <AppLayout>
      <View style={{ ...globalStyle.container, ...styles.container }}>
        <View style={styles.contentContainer}>

          <Header title='Recover Password' icon={UnlockWhiteSvg} subtitle='Enter your email or phone number' />

          {/* input fields */}
          <Input label={'Email/Phone No'} type='emailAddress' icon={EnvelopeSVG} />
        </View>

        <PrimaryButton onPress={() => navigation.navigate('Recovery_Link_Sent')} text='Next' />
      </View>
    </AppLayout>
  )
}

export default RecoverPassword

const styles = StyleSheet.create({
  container: {
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    backgroundColor: '#D9D9D9'
  },
  createAccountContainer: {
    justifyContent: 'center',
    color: colors.black,
    flexDirection: 'row'
  },
  dontHaveText: {
    fontWeight: 400,
    fontSize: 16,
  },
  createAccountText: {
    color: colors.primary,
    fontWeight: 700,
    fontSize: 16,
  },
  forgot: {
  },
  forgotText: {
    textAlign: 'center',
    marginVertical: 5
  },
  buttonContainer: {
  },

})