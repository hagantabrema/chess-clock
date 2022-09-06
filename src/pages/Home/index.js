import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { Gap, TimerButton } from '../../components'
import { Refresh, Settings } from '../../assets'

const Home = () => {
  return (
    <View style={styles.page}>
      <TimerButton></TimerButton>
        <View>
          <Settings style={styles.icon}></Settings>
          <Refresh style={styles.icon}/>
        </View>
      <TimerButton></TimerButton>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary
  },

  icon: {
    color: colors.white
  }
})