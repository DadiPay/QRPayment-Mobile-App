import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../data/constants/colors'

const Header = ({ title, icon: Icon, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.image(Icon)} >
          {Icon && (
            <Icon />
          )}
        </View>

      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}  >{title}</Text>

        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  )
}

const radius = 80
const styles = StyleSheet.create({
  container: {

    paddingTop: 43,
    paddingBottom: 56,
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: (Icon) => ({
    backgroundColor: Icon ? colors.primary : colors.ImgBgGrey,
    width: radius,
    height: radius,
    borderRadius: radius / 2,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  titleContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    color: colors.black,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    color: colors.black,
    paddingVertical: 3,
  }
})

export default Header