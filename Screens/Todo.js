import React, { useEffect, useState } from 'react'
import { ScrollView, View, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Icon, Input, Text } from 'react-native-elements'
import axios from 'axios'
import { removeUser } from '../Redux/Actions/authActions'
import styles from '../utils/styles'
import { allPaths } from '../utils/constant'

const Todo = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.authReducer?.user)
    const [task, setTask] = useState('')
    const [allTask, setAllTask] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editObj, setEditObj] = useState({})

    useEffect(() => {
        if (!user || !user?._id) {
            Alert.alert('Please Login First to Access this Screen!')
            return navigation.push(allPaths.LOGIN)
        }

        getTodo()
    }, [])

    const getTodo = () => {
        axios.get(`https://axiom-node-example.herokuapp.com/todo/get_all/${user?._id}`)
            .then((res) => {
                const { data } = res

                if (data?.success) {
                    setAllTask([...data?.tasks])
                }
            })
            .catch(e => console.log('e****', e))
    }

    const logout = () => {
        dispatch(removeUser())
        navigation.push(allPaths.LOGIN)
    }

    const addTodo = () => {
        if (!task) {
            return Alert.alert('Please Add Task First!')
        }

        let values = {
            task,
            userId: user?._id
        }

        axios.post(`https://axiom-node-example.herokuapp.com/todo/add_todo`, values)
            .then((res) => {
                const { data } = res
                getTodo()

                Alert.alert(data?.message)
                if (data?.success) {
                    setTask('')
                }
            })
            .catch((e) => Alert.alert('Something went Wrong!'))
    }

    const deleteTask = (id) => {
        axios.delete(`https://axiom-node-example.herokuapp.com/todo/delete_todo/${id}`)
            .then((res) => {
                const { data } = res

                if (data?.success) {
                    getTodo()
                }
                Alert.alert(data?.message)
            })
            .catch((e) => Alert.alert('Something went Wrong!'))
    }

    const editTodo = (v) => {
        setIsEdit(true)
        setEditObj(v)
        setTask(v?.task)
    }

    const cancelEdit = () => {
        setIsEdit(false)
        setEditObj({})
        setTask('')
    }

    const updateTodo = () => {
        if (!task) {
            return Alert.alert('Please Add Task First!')
        }

        let values = {
            _id: editObj?._id,
            task
        }

        axios.put(`https://axiom-node-example.herokuapp.com/todo/update_todo`, values)
            .then((res) => {
                const { data } = res

                if (data?.success) {
                    getTodo()
                    cancelEdit()
                    return Alert.alert('Successfully Updated!')
                }
                Alert.alert(data?.message)
            })
            .catch((e) => Alert.alert('Something went Wrong!'))
    }

    return (
        <View>
            <View style={{ ...styles?.todoStyle, ...styles?.logoutView }}>
                <Text style={styles.emailText}>{user?.email}</Text>
                <Button
                    title='Logout'
                    containerStyle={styles.todoButton}
                    buttonStyle={styles.deleteButton}
                    onPress={logout}
                />
            </View>

            <View style={styles?.todoStyle}>
                <Input
                    containerStyle={styles.todoInput}
                    placeholder='Enter Todo!'
                    value={task}
                    onChangeText={(e) => setTask(e)}
                    leftIcon={
                        <Icon
                            name='add-task'
                            color='#808080'
                        />
                    }
                />
                {!isEdit ? <Button
                    title='Add'
                    containerStyle={styles.todoButton}
                    buttonStyle={{ borderRadius: 5 }}
                    onPress={addTodo}
                /> :
                    <View style={styles.editView}>
                        <Button
                            title='Update'
                            containerStyle={styles.todoButton}
                            buttonStyle={{ borderRadius: 5 }}
                            onPress={updateTodo}
                        />
                        <Button
                            title='Cancel'
                            type='outline'
                            containerStyle={styles.todoButton}
                            buttonStyle={{ borderRadius: 5 }}
                            onPress={cancelEdit}
                        />
                    </View>}
            </View>

            <ScrollView>
                <View>
                    {allTask?.map((v, i) => {
                        return (
                            <View key={i} style={styles.todoList}>
                                <Text style={styles?.todoTask}>{v?.task}</Text>
                                <View style={styles?.todoActions}>
                                    <Button
                                        title='Edit'
                                        containerStyle={styles.todoButton}
                                        buttonStyle={{ borderRadius: 5 }}
                                        onPress={() => editTodo(v)}
                                    />
                                    <Button
                                        title='Delete'
                                        containerStyle={styles.todoButton}
                                        buttonStyle={styles.deleteButton}
                                        onPress={() => deleteTask(v?._id)}
                                    />
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default Todo