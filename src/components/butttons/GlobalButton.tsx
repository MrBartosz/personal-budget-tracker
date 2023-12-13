import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { theme } from '../../styles/theme'
import { TextRegular } from '../typography/Text'

interface IGlobalButton {
  submitFunction?: any
  title: string
  backgroundColor?: string
  width?: number
}

export const GlobalButtton = ({ submitFunction, width, title, backgroundColor }: IGlobalButton) => {
  return (
    <Pressable style={[styles.buttonContainer, { width }]} onPress={submitFunction}>
      <View style={styles.submitButton}>
        <TextRegular fontSize={16} color="white" lineHeight={21} fontWeight={500} letterSpacing={0.25}>
          {title}
        </TextRegular>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  submitButton: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
