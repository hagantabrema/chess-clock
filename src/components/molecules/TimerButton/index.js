import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const TimerButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>5:00</Text>
    </TouchableOpacity>
  )
}

export default TimerButton

const styles = StyleSheet.create({
  button: {
    width: 298,
    height: 224,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },

  text: {
    fontSize: 84,
    fontFamily: fonts.primary,
    color: colors.black
  }
})