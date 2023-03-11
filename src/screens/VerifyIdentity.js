import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/auth/Header'
import Input from '../components/auth/Input'
import AppLayout, { globalStyle } from '../components/layout/AppLayout'

import { colors } from '../data/constants/colors'
import VerifyBadgeSvg from '../assets/svgs/VerifyBadgeSvg'
import VerifiedSvg from '../assets/svgs/VerifiedSvg'
import PrimaryButton from '../components/atoms/Button'

const windowHeight = Dimensions.get('window').height;


const VerifyIdentity = ({ navigation }) => {
  return (
    <AppLayout>
      <View style={{ ...globalStyle.container, ...styles.container }}>
        <View style={styles.contentContainer}>

          <Header title='Identity Verification' icon={VerifyBadgeSvg} />

          {/* input fields */}
          <View>
            <Input placeholder='Choose Verification Method' disabled editable={false} />
            <Input label='BVN' textContentType='password' icon={VerifiedSvg} keyboardType='numeric' autoFocus />
          </View>
        </View>

        <PrimaryButton onPress={() => navigation.navigate('Set_Transaction_Pin')} text='Verify' />

      </View>
    </AppLayout>

  )
}

const styles = StyleSheet.create({
  container: {

  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 14,
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
    textAlign: 'center'
  },

})


export default VerifyIdentity

