import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#2196f3'
    },
    input: {
        borderWidth: 1,
        lineHeight: 20,
        paddingLeft: 10,
        borderRadius: 10,
        height: 40,
        borderColor: 'lightgrey',
        margin: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#2196f3',
        height: 40
    },
    textHead: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'italic',
        lineHeight: 40,
        textDecorationLine: 'underline'
    },
    registerHere: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    link: {
        color: '#2196f3'
    },
    submitButton: {
        margin: 10,
        borderRadius: 10
    },
    todoStyle: {
        flexDirection: 'row',
        marginTop: 10
    },
    todoInput: {
        flex: 3
    },
    todoButton: {
        flex: 1,
        marginTop: 8,
        marginRight: 6
    },
    todoList: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1
    },
    todoTask: {
        flex: 3,
        paddingLeft: 6,
        paddingTop: 14
    },
    todoActions: {
        flex: 2,
        flexDirection: 'row',
        paddingBottom: 8
    },
    deleteButton: {
        backgroundColor: 'red',
        borderRadius: 5
    }
})

export default styles