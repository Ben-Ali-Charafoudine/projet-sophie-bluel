async function loadUser () {
    const response = await fetch('/api/users/1')
    const user = await response.json()
    
    return user
}

async function loadAddress (userId) {
    const response = await fetch(`/api/users/${userId}/address`)
    const address = await response.json()
    
    return address
}

async function sendLetter(address) {
    const response = await fetch('/api/letter', {
        method: 'POST'
    })
}

function loadItems () {
    loadUser()
    .then((user) => {
        loadAddress(user.id)
        .then(address => {
            sendLetter(address)
            .then(() => {
                
            })
        })
    })
}
async function loadItems2 () {
    const user = await loadUser()
    const addresse = await loadAddress(user.id)
    const response = sendLetter(address)
}

loadItems()