import express from 'express'
import productsRoutes from './routes/products.routes.js'
import usersRoutes from './routes/users.routes.js'
import imformsRoutes from './routes/imforms.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express();

export const port = 3000

app.get('/', (req, res) => {
    res.send('Api node')
})

app.use(express.json())

app.use('/api', productsRoutes)
app.use('/api', usersRoutes)
app.use('/api', imformsRoutes)
app.use('/api', authRoutes)

export default app