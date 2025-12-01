import express from 'express'

const router = express.Router()
// Transforma em uma lista especifica do tipo produto
const products: IProduct[] = []

// Cria uma interface para produto
interface IProduct {
    name: string;
    price: number;
    many: number;
}
// Retorna os produtos
router.get('/', (req, res) => {

    res.status(200).json(products)

})
// Retorna um produto especifico por id
router.get('/:id', (req, res) => {

    const { id } = req.params
    const index = parseInt(id) - 1
    
    res.status(200).json(products[index])

})
// Cria outro produto
router.post('/', (req, res) => {

    const newProduct: IProduct = req.body 

    products.push(newProduct)

    res.status(201).json(newProduct)

})

router.delete('/:id', (req, res) => {

    const { id } = req.params
    const index = parseInt(id) - 1

    products.splice(index, 1)

    res.status(200).json(products)

})

router.patch('/:id', (req, res) => {

    const { id } = req.params
    const updatedProduct: IProduct = req.body
    const index = parseInt(id) - 1

    products[index] = updatedProduct
    res.status(200).json(products)

})

export default router