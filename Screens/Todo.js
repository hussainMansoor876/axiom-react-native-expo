import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button, Icon, Input, Text } from 'react-native-elements'
import styles from '../utils/styles'

const dummyList = [
    {
        task: 'test1'
    },
    {
        task: 'test2'
    },
    {
        task: 'test3'
    },
    {
        task: 'test4'
    },
    {
        task: 'test5'
    },
    {
        task: 'test6'
    },
    {
        task: 'test7'
    },
    {
        task: 'test8'
    },
    {
        task: 'test9'
    },
    {
        task: 'test10'
    },
    {
        task: 'test1'
    },
    {
        task: 'test2'
    },
    {
        task: 'test3'
    },
    {
        task: 'test4'
    },
    {
        task: 'test5'
    },
    {
        task: 'test6'
    },
    {
        task: 'test7'
    },
    {
        task: 'test8'
    },
    {
        task: 'test9'
    },
    {
        task: 'test10'
    }
]

const Todo = (props) => {
    const data = useSelector((state) => state)

    console.log('data', data)

    return (
        <View>
            <View style={styles?.todoStyle}>
                <Input
                    containerStyle={styles.todoInput}
                    placeholder='Enter Todo!'
                    leftIcon={
                        <Icon
                            name='add-task'
                            color='#808080'
                        />
                    }
                />
                <Button
                    title='Add'
                    containerStyle={styles.todoButton}
                    buttonStyle={{ borderRadius: 5 }}
                />
            </View>

            <ScrollView>
                <View>
                    {dummyList?.map((v, i) => {
                        return (
                            <View key={i} style={styles.todoList}>
                                <Text style={styles?.todoTask}>{v?.task}</Text>
                                <View style={styles?.todoActions}>
                                    <Button
                                        title='Edit'
                                        containerStyle={styles.todoButton}
                                        buttonStyle={{ borderRadius: 5 }}
                                    />
                                    <Button
                                        title='Delete'
                                        containerStyle={styles.todoButton}
                                        buttonStyle={styles.deleteButton}
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