import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, LargeButton, SmallButton } from '../../components'
import { colors, fonts } from '../../utils'

const Settings = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.label}>Bullet</Text>
        <View style={styles.buttonGroup}>
          <SmallButton text="1 min"></SmallButton>
          <SmallButton text="1 | 1"></SmallButton>
          <SmallButton text="2 | 1"></SmallButton>
        </View>
      <Text style={styles.label}>Blitz</Text>
      <Gap height={10}></Gap>
        <View style={styles.buttonGroup}>
          <SmallButton text="3 min"></SmallButton>
          <SmallButton text="3 | 2"></SmallButton>
          <SmallButton text="5 min"></SmallButton>
        </View>
      <Text style={styles.label}>Rapid</Text>
      <Gap height={10}></Gap>
        <View style={styles.buttonGroup}>
          <SmallButton text="10 min"></SmallButton>
          <SmallButton text="15 | 10"></SmallButton>
          <SmallButton text="30 min"></SmallButton>
        </View>
      <LargeButton text="Custom"></LargeButton>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },

  label: {
    fontFamily: fonts.secondary,
    fontSize: 14
  },

  buttonGroup: {
    flexDirection: 'row',
  }
})