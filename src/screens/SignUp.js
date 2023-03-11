import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import EnvelopeSVG from '../assets/svgs/EnvelopeSvg.js'
import LockSVG from '../assets/svgs/LockSvg.js'
import PersonSvg from '../assets/svgs/PersonSvg.js'
import LocationUnlistedSvg from '../assets/svgs/LocationUnlistedSvg.js'
import PhoneSvg from '../assets/svgs/PhoneSvg.js'
import CheckBox from '../components/atoms/CheckBox'
import PrimaryButton from '../components/atoms/Button'
import { heightPercentageToDP } from '../helpers/functions/responsiveHelper'

const SignUp = ({ navigation }) => {


  const [selectCheckBox, setSelectedCheckBox] = useState(false)

  const toggleCheckBox = () => {
    setSelectedCheckBox(prev => !prev)
  }

  return (
    <AppLayout keyboard={{ enabled: true }}>

      <View style={styles.container} >
        <Header title='Create An Account' />

        {/* input fields */}
        <Input label={'Full Legal Name'} textContentType='givenName' icon={PersonSvg} autoFocus />
        <Input label='Occupation ' textContentType='jobTitle' icon={LocationUnlistedSvg} />
        <Input label='Email' textContentType='emailAddress' icon={PhoneSvg} />
        <Input label='Phone Number' textContentType='telephoneNumber' keyboardType='phone-pad' icon={EnvelopeSVG} />
        <Input label='Password' textContentType='password' secureTextEntry icon={LockSVG} />
        <Input label='Confirm Password' textContentType='password' secureTextEntry icon={LockSVG} />

        <View style={styles.createAccountContainer}>
          <CheckBox selected={selectCheckBox} onPress={toggleCheckBox} />
          <Text style={styles.dontHaveText}>I agree to the </Text>
          <Text style={styles.termsOfService}> terms of service </Text>
        </View>

        <PrimaryButton onPress={() => (console.log('clicking'), navigation.navigate('Verify'))} text='Sign-up' />

      </View>
    </AppLayout>

  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingBottom: heightPercentageToDP(5)
  },
  header: {

  },
  image: {
    backgroundColor: '#D9D9D9'
  },
  createAccountContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 15,
    padding: 2,
  },
  dontHaveText: {
    fontWeight: 400,
    fontSize: 16,
    marginLeft: 10,
    color: colors.black
  },
  termsOfService: {
    color: '#246EE9',
    fontWeight: 700,
    fontSize: 16,
  },
  forgotText: {
    textAlign: 'center'
  },
  buttonContainer: {
  },
  button: {
    backgroundColor: colors.primary,
    height: 54,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
  }
})


export default SignUp

