import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register } from '../Screens'
import * as allPaths from './path'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={allPaths.LOGIN} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={allPaths.LOGIN} component={Login} />
                <Stack.Screen name={allPaths.REGISTER} component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator