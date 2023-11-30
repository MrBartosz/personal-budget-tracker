import { Text, View, StyleSheet } from 'react-native'

export const MainArea = () => {
  return (
    <View style={styles.mainArea}>
      <Text>Main Area - Income and Expenses</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
