import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store'
import { StackNavigator } from './Navigation'

const App = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <View style={styles.container}>
            <StackNavigator />
          </View>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff'
  }
})

export default App