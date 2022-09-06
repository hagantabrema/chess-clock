import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const LargeButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default LargeButton

const styles = StyleSheet.create({
    button: {
        width: 332,
        height: 58,
        backgroundColor: colors.secondary,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontFamily: fonts.secondary,
        fontSize: 20
    }
})