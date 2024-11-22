import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Página Principal')
})

app.get('/login', (req, res) => {
    res.send('Login de usuarios')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:4000/')
})