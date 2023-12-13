import { StyleSheet, ScrollView, View } from 'react-native'
import { MainArea } from './src/views/MainArea'
import { AppHeader } from './src/views/AppHeader'
import { strings } from './src/components/contants/strings'
import { Footer } from './src/views/Footer'
import { theme } from './src/styles/theme'
import { FontLoader } from './src/components/fontLoader/FontLoader'

export default function App() {
  return (
    <View style={styles.container}>
      <FontLoader>
        <AppHeader title={strings.general.appName} />
        <ScrollView style={styles.scrollView}>
          <MainArea />
        </ScrollView>
        <Footer />
      </FontLoader>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral,
  },
})
