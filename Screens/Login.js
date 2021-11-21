import React, { useState } from 'react'
import { ScrollView, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios'
import styles from '../utils/styles'

const Login = (props) => {
    const [values, setValues] = useState({})

    const setState = (obj) => {
        setValues({ ...values, ...obj })

        console.log('values', values)
    }

    const onSubmit = () => {
        if (!values?.email || !values?.password) {
            return Alert.alert('Please Fill All fields!')
        }

        console.log('****')

        axios.post(`https://axiom-node-example.herokuapp.com/auth/login`, values)
            .then((res) => {
                const { data } = res
                console.log('data', data)

                if (data?.success) {
                    Alert.alert('Successfully LoggedIn!')
                }
                else {
                    Alert.alert(data?.message)
                }

            })
            .catch(e => console.log('e****', e))
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
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity>
                <View style={styles.registerHere}>
                    <Text>Don't have an Account?&nbsp;</Text>
                    <TouchableOpacity onPress={() => props.setLoginPage(false)}>
                        <Text style={styles.link}>Register Here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login