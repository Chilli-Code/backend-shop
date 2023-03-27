import {pool} from '../dbConnection.js'

export const getProducts = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM products')
        res.send(rows)
    } catch (error) {
        res.status(500).json({
            message: 'server not found'
        })
    }
}
export const getProduct = (req, res) => {
    res.send('get a product with id')
}
export const postProduct = (req, res) => {
    res.send('post a product')
}
export const putProduct = (req, res) => {
    res.send('put a product')
}
export const deleteProduct = (req, res) => {
    res.send('delete a product')
}