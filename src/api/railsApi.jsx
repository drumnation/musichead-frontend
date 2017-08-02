var environment = ['http://localhost:3000', 'http://musichead-rails-api.herokuapp.com']

function logIn(params) {
    return fetch(`${environment[1]}/api/v1/sessions/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
    }).then(res => res.json())
}

function fetchUsers() {
    return fetch(`${environment[1]}/api/v1/users`, {
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }
    })
        .then(res => res.json())
}

function fetchUser(id) {
    return fetch(`${environment[1]}/api/v1/users/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }
    })
        .then(res => res.json())
}

function createUser(user) {
    return fetch(`${environment[1]}/api/v1/users/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('jwt')
        },
        method: 'POST',
        body: JSON.stringify({ user })
    }).then(res => res.json())
}

function updateUser(user) {
    return fetch(`${environment[1]}/api/v1/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('jwt')
        },
        body: JSON.stringify({ user })
    }).then(res => res.json())
}

function deleteUser(user) {
    return fetch(`${environment[1]}/api/v1/users/${user.id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('jwt')
        },
    }).then(res => res.json())
}

export { logIn, fetchUser, fetchUsers, createUser, updateUser, deleteUser, environment }