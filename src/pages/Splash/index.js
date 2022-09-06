import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const Splash = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Chess Clock</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  text: {
    fontSize: 32,
    fontFamily: fonts.primary,
    color: colors.white
  }
})