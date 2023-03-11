import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../data/constants/colors'
import { heightPercentageToDP } from '../../helpers/functions/responsiveHelper'


const PrimaryButton = ({ style = {}, text, ...props }) => {

  // const bottomStyles = bottom ? styles.bottom : {}
  return (
    <Pressable style={[styles.button, style]} {...props} >
      <Text style={styles.buttonText}> {text} </Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 54,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    marginVertical: 5,
  },
  // bottom: {
  //   position: 'absolute',
  //   bottom: heightPercentageToDP(4),
  //   width: '100%',
  //   margin: 'auto'
  // }
})