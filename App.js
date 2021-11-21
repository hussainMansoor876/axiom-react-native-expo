import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Login, Register } from './Screens'

const App = () => {
  const [loginPage, setLoginPage] = useState(true)

  return (
    <View style={styles.container}>
      {loginPage ? <Login setLoginPage={setLoginPage} /> : <Register setLoginPage={setLoginPage} />}
    </View>
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