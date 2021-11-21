import React, { useState } from 'react'
import { ScrollView, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios'
import styles from '../utils/styles'

const Register = (props) => {
    const [values, setValues] = useState({})

    const setState = (obj) => {
        setValues({ ...values, ...obj })

        console.log('values', values)
    }

    const onSubmit = () => {
        console.log('if')
        if (!values?.userName || !values?.firstName || !values?.lastName || !values?.email || !values?.password) {
            return Alert.alert('Please Fill All fields!')
        }

        console.log('****')

        axios.post(`https://axiom-node-example.herokuapp.com/auth/register`, values)
            .then((res) => {
                const { data } = res
                console.log('data', data)

                if (data?.success) {
                    Alert.alert('Successfully Registered!')
                }
            })
            .catch(e => console.log('e****', e))
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHead}>Register</Text>
                <TextInput
                    placeholder='UserName Here!'
                    style={styles.input}
                    onChangeText={e => setState({ userName: e })}
                />
                <TextInput
                    placeholder='First Name Here!'
                    style={styles.input}
                    onChangeText={e => setState({ firstName: e })}
                />
                <TextInput
                    placeholder='Last Name Here!'
                    style={styles.input}
                    onChangeText={e => setState({ lastName: e })}
                />
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
                    <Text style={{ color: '#fff' }}>Register</Text>
                </TouchableOpacity>
                <View style={styles.registerHere}>
                    <Text>Already have an Account?&nbsp;</Text>
                    <TouchableOpacity onPress={() => props.setLoginPage(true)}>
                        <Text style={styles.link}>LogIn Here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register