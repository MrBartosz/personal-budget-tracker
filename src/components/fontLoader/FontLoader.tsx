import { useFonts } from 'expo-font'

export const FontLoader = ({ children }) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../../assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return children
}
