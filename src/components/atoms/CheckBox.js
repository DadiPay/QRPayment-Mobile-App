import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import WhiteTickSvg from '../../assets/svgs/WhiteTickSvg'
import { colors } from '../../data/constants/colors'

const CheckBox = ({ selected = () => { }, ...props }) => {
  return (
    <Pressable style={styles.touchable} {...props} >
      <View style={styles.selectContainer(selected)}>
        <WhiteTickSvg />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  touchable: {
    padding: 2
  },
  selectContainer: (selected) => ({
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: selected ? colors.primary : '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selected ? colors.primary : 'white'
  })
})

export default CheckBox