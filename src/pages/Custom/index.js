import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Gap, LargeButton } from '../../components'
import { colors, fonts } from '../../utils'

const Custom = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Custom Timer</Text>
      <Gap height={50}></Gap>
      <Text style={styles.subtitle}>Time</Text>
      <TextInput>hell</TextInput>
      <Gap height={50}></Gap>
      <Text style={styles.subtitle}>Increments</Text>
      <TextInput></TextInput>
      <Gap height={50}></Gap>
      <LargeButton text="Done" style={styles.button}></LargeButton>
    </View>
  );
}

export default Custom

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center'
    },

    title: {
        fontFamily: fonts.primary,
        fontSize: 28,
        color: colors.white,
    },

    subtitle: {
        fontFamily: fonts.primary,
        fontSize: 20,
        color: colors.white,
    }
})