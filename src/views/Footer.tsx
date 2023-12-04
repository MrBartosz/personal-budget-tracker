import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { strings } from '../components/contants/strings'
import { TextRegular } from '../components/typography/Text'
import { theme } from '../styles/theme'

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <TextRegular fontSize={10} color={theme.colors.alight}>
        {strings.footer.content}
      </TextRegular>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: theme.colors.header,
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
})
