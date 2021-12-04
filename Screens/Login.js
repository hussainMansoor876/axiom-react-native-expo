import React, { useState } from 'react'
import { ScrollView, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Redux/Actions/authActions'
import styles from '../utils/styles'
import { allPaths } from '../utils/constant'

const Login = (props) => {
    const dispatch = useDispatch()
    const { navigation } = props
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)

    const setState = (obj) => {
        setValues({ ...values, ...obj })

        console.log('values', values)
    }

    const onSubmit = () => {
        if (!values?.email || !values?.password) {
            return Alert.alert('Please Fill All fields!')
        }

        setLoading(true)

        console.log('****')

        axios.post(`https://axiom-node-example.herokuapp.com/auth/login`, values)
            .then((res) => {
                const { data } = res
                console.log('data', data)
                setLoading(false)

                if (data?.success) {
                    Alert.alert('Successfully LoggedIn!')
                    dispatch(loginUser(data?.user))
                }
                else {
                    Alert.alert(data?.message)
                }

            })
            .catch(e => {
                setLoading(false)
                console.log('e****', e)
            })
    }

    return (
        <ScrollView style={{ marginTop: 50 }}>
            <View style={styles.container}>
                <Text style={styles.textHead}>Login</Text>
                <TextInput
                    placeholder='Email Here!'
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={e => setState({ email: e })}
                />
                <TextInput
                    placeholder='Password Here!'
                    style={styles.input}
                    secureTextEntry
                    onChangeText={e => setState({ password: e })}
                />
                <Button
                    onPress={onSubmit}
                    title='Login'
                    buttonStyle={styles.submitButton}
                    loading={loading}
                    icon={
                        <Icon
                            name='arrow-right'
                            color='white'
                            type='evilicon'
                            size={30}
                        />
                    }
                    iconRight
                />
                {/* <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity> */}
                <View style={styles.registerHere}>
                    <Text>Don't have an Account?&nbsp;</Text>
                    <TouchableOpacity onPress={() => navigation.push(allPaths.REGISTER)}>
                        <Text style={styles.link}>Register Here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login