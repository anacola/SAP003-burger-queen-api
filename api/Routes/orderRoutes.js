import { Router } from 'express'
import OrderController from '../Controllers/orderController'

const router = Router()
router.get('/', OrderController.getAll)
//router.post('/', AuthorController.addAuthor)
//router.get('/:id', AuthorController.getAuthor)
//router.put('/:id', AuthorController.updatedAuthor)
//router.delete('/:id', AuthorController.deleteAuthor)
export default router