import { StyleSheet, Text } from 'react-native'
import { theme } from '../../styles/theme'
import { IRecipeText } from '../../../typescript/textInterfaces'

export const TextRegular = ({
  children,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  letterSpacing,
  textAlign,
  marginRight,
  marginTop,
  marginBottom,
  opacity,
  textDecorationLine,
}: IRecipeText) => (
  <Text
    style={[
      styles.text,
      {
        fontSize,
        fontWeight,
        color,
        lineHeight,
        letterSpacing,
        textAlign,
        marginRight,
        marginTop,
        marginBottom,
        opacity,
        textDecorationLine,
      },
    ]}
  >
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PoppinsRegular',
    color: theme.colors.black,
    fontWeight: '400',
    textAlign: 'left',
  },
})
