import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { allPaths } from '../utils/constant'
import { Todo, Home } from '../Screens'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name={allPaths.TODO}
                    component={Todo}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='home-work'
                                color={color}
                                type='material-icons'
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={allPaths.HOME}
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='home'
                                color={color}
                                type='font-awesome'
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator