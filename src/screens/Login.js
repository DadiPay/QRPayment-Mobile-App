import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout, { globalStyle } from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import EnvelopeSVG from '../assets/svgs/EnvelopeSvg.js'
import LockSVG from '../assets/svgs/LockSvg.js'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PrimaryButton from '../components/atoms/Button'
import { heightPercentageToDP, widthPercentageToDP } from '../helpers/functions/responsiveHelper'

const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {

  return (
    <AppLayout >
      <View style={{ ...globalStyle.container, ...styles.container }}>
        <View style={styles.contentContainer}>

          <Header title='Sign-in to Your Account' />

          {/* input fields */}
          {/* <View> */}
          <Input label={'Username/Email'} textContentType='emailAddress' icon={EnvelopeSVG} autoFocus />
          <Input label='Password' textContentType='password' secureTextEntry icon={LockSVG} />
          {/* </View> */}

          <View style={styles.createAccountContainer}  >
            <Text style={styles.dontHaveText}>Dont have an account?</Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.createAccountText}> Create Account </Text>
            </Pressable>
          </View>
          <Pressable style={styles.forgotTextContainer} onPress={(e) => (navigation.navigate('Recover_Password'))}>
            <Text style={[styles.forgotText, styles.createAccountText]}> Forgot details </Text>
          </Pressable>
        </View>

        <PrimaryButton style={styles.button} text='Login' />
      </View>
    </AppLayout >

  )
}

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
    color: colors.black,
  },
  createAccountText: {
    color: colors.primary,
    fontWeight: 700,
    fontSize: 16,
  },
  forgotTextContainer: {
    // marginBottom: '68%',
    marginTop: 5,
  },
  forgotText: {
    textAlign: 'center',
  },
  button: {}
})


export default Login
