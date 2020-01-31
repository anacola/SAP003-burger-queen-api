import models from '../../models/index';

class ProductService {
  static async getAllProduct() {
    try {
      return await models.products.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addProduct(newProduct) {
    try {
      return await models.products.create(newProduct)
    } catch (error) {
      throw error
    }
  }

  static async updateProduct(id, updateProduct) {
    try {
      const productToUpdate = await models.products.findOne({
        where: { id: Number(id) }
      })

      if (productToUpdate) {
        await models.products.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProduct(id) {
    try {
      const theProduct = await models.product.findOne({
        where: { id: Number(id) }
      })

      return theProduct
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await models.products.findOne({ where: { id: Number(id) } })

      if (productToDelete) {
        const deletedAuthor = await models.products.destroy({
          where: { id: Number(id) }
        })
        return deletedAuthor
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProductService
