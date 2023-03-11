import React from 'react'
import { Dimensions, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/functions/responsiveHelper';

const windowHeight = Dimensions.get('window').height;

const AppLayout = ({ children, style, keyboard = { enabled: false }, ...props }) => {
  const onAppPress = () => {
    Keyboard.dismiss()
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, }}
        {...keyboard}
      >
        <ScrollView
          style={[styles.scrollView, style]}
          contentContainerStyle={{ flexGrow: 1 }}
          {...props}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  scrollView: {
    paddingHorizontal: widthPercentageToDP(3),
  },
  globalContainer: {
    flex: 1,
    paddingBottom: heightPercentageToDP(4),
  }
})
const globalStyle = { container: styles.globalContainer }
export { globalStyle }
export default AppLayout