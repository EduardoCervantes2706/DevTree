import express from 'express'
const app = express()

// Routing

app.get('/', (req, res) => {
    res.send('Página Principal')
})

app.get('/login', (req, res) => {
    res.send('Login de usuarios')
})

export default app