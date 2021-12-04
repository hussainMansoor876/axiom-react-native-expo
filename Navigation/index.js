import * as React from 'react'
import { useSelector } from 'react-redux'
import { Login, Register, Todo } from '../Screens'
import * as allPaths from './path'
import StackNavigator from './StackNavigator'
import TabNavigator from './TabNavigator'
import DrawerNavigator from './DrawerNavigator'

const Navigation = () => {
    const user = useSelector((state) => state?.authReducer?.user)
    console.log('user', user)

    if (user && user?._id) {
        return <DrawerNavigator />
    }
    return (
        <StackNavigator />
    )
}

export default Navigation