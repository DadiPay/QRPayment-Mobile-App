import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from '../../data/constants/colors'



const HiddenPin = ({ filled, small }) => {
  let outerRadius = small ? 50 : 67
  let innerRadius = small ? 21 : 28

  return (
    <View style={styles(outerRadius, innerRadius).container}>
      {filled && <View style={styles(outerRadius, innerRadius).innerCircle}></View>}
    </View>
  )
}

export default HiddenPin


const styles = (outerRadius, innerRadius,) => StyleSheet.create({
  container: {
    height: outerRadius,
    width: outerRadius,
    borderRadius: outerRadius / 2,
    backgroundColor: colors.ImgBgGrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    height: innerRadius,
    width: innerRadius,
    borderRadius: innerRadius / 2,
    backgroundColor: colors.primaryDeep

  }
})