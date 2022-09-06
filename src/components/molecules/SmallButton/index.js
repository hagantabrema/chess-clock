import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const SmallButton = ({text}) => {
  return (
    <TouchableHighlight underlayColor={"black"} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}

export default SmallButton

const styles = StyleSheet.create({
    button: {
        width: 104,
        height: 50,
        borderRadius: 6,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    text: {
        fontFamily: fonts.secondary,
        fontSize: 14
    }
})