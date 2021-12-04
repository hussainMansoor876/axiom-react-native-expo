import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { allPaths } from '../utils/constant'
import { Todo, Home } from '../Screens'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
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
                <Drawer.Screen
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
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator