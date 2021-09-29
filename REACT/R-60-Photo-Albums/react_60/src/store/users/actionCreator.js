import Types from "./actionTypes";
import * as UsersData from './../../data/usersData'

export const initialState = () => {
    return dispatch => {
        dispatch({ type: Types.load })
        try {
            setTimeout(() => {
                const data = {
                    users: UsersData.getUsers(),
                    currentUser: UsersData.getCurrentUser()
                }
                dispatch({ type: Types.initState, payload: { ...data } })
            }, 2000)
        } catch (e) {
            dispatch({ type: Types.error, payload: e.message })
            console.log(e.message)
        }
    }
}

export const registration = (user) => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const newUser = createUser(user)
                if (newUser) {
                    dispatch({
                        type: Types.registration,
                        payload: newUser
                    })
                } else {
                    throw new Error('user srecified email is already exist')
                }
            } catch (e) {
                dispatch({ type: Types.error, payload: e.message })
            }
        }, 2000)

    }
}

const logout = () => {
    return ({
        type: Types.logout
    })
}
/*  const isUserExist = users.some(u => u.email === user.email)
 if (!isUserExist) {
     const newUser = { ...user, id: Date.now() }
     const newUsersArray = [...users, newUser]
     setUsers(newUsersArray)
     setUsersToLocalStorage(newUsersArray)
     setCurrentUser(newUser)
     setCurrentUserLocalStorage(newUser)
     return true
 }
 return false */



const createUser = user => {
    const users = UsersData.getUsers()
    const isEmailExist = users.some(u => u.email === user.email)
    if (!isEmailExist) {
        user = { ...user, id: Date.now() }
        users.push(user)
        UsersData.setUsersToLocalStorage(users)
        UsersData.setCurrentUserLocalStorage(user)
        return user
    }
    return null
}


