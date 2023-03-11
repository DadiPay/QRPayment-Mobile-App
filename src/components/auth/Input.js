import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import EnvelopeSvg from '../../assets/svgs/EnvelopeSvg.js'
import { SvgXml } from 'react-native-svg';
import { colors } from '../../data/constants/colors.js';


const Input = ({ label, icon: Icon, type = 'emailAddress', ...props }) => {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}

      <View style={styles.inputSvg}>
        <View style={styles.svgContainer}>
          {Icon && (
            <Icon style={styles.svg} />
          )}
        </View>

        <TextInput style={styles.input} textContentType={type || ''}{...props} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.inputBorder,
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 7,
    marginVertical: 10,
    borderRadius: 2
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingVertical: 2,
    height: '100%',
  },
  inputSvg: {
    flexDirection: 'row',
    columnGap: 10,
    height: '90%',
    alignItems: 'center'
  },
  svgContainer: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: `${colors.primary}0D`,
  },
  svg: {
    // width: 35,
    height: 35,
  },
  label: {
    position: 'absolute',
    color: colors.black,
    backgroundColor: colors.bgWhite,
    paddingHorizontal: 5,
    top: -10,
    left: 63,
    fontWeight: 300,
    fontSize: 14,
    textTransform: 'capitalize'
  }
})

export default Input