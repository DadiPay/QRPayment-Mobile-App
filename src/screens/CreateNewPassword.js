import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout, { globalStyle } from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import EnvelopeSVG from '../assets/svgs/EnvelopeSvg.js'
import LockSVG from '../assets/svgs/LockSvg.js'
import UnlockWhiteSvg from '../assets/svgs/UnlockWhiteSvg'
import PrimaryButton from '../components/atoms/Button'

const windowHeight = Dimensions.get('window').height;

const CreateNewPassword = ({ navigation }) => {

  return (
    <AppLayout>
      <View style={{ ...globalStyle.container, ...styles.container }}>
        <View style={styles.contentContainer}>

          <Header title='Create New Password' icon={UnlockWhiteSvg} />

          {/* input fields */}
          <View>
            <Input label='New Password' textContentType='password' secureTextEntry icon={LockSVG} />
            <Input label='Confirm Password' textContentType='password' secureTextEntry icon={LockSVG} />
          </View>
        </View>

        <PrimaryButton onPress={() => navigation.navigate('Login')} text='Login' />
      </View>
    </AppLayout>

  )
}

const styles = StyleSheet.create({
  container: {
  },
  contentContainer: {
    flex: 1,
  },
})


export default CreateNewPassword

