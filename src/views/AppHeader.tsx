import React from 'react'
import { Header } from 'react-native-elements'
import { theme } from '../styles/theme'

interface AppHeaderProps {
  title: string
}

export const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <Header
      centerComponent={{
        text: title,
        style: {
          color: theme.colors.neutral,
          marginTop: 30,
          fontSize: 20,
        },
      }}
      containerStyle={{
        backgroundColor: theme.colors.header,
        height: 90,
        borderRadius: 8,
      }}
      barStyle="light-content"
    />
  )
}
