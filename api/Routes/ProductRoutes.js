import { Router } from 'express'
import ProductController from '../Controllers/ProductController'

const router = Router()
router.get('/', ProductController.getAllProduct)
router.post('/', ProductController.addProduct)
router.get('/:id', ProductController.getProduct)
router.put('/:id', ProductController.updatedProduct)
router.delete('/:id', ProductController.deleteProduct)

export default router