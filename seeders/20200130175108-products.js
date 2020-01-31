'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('products', [

        {
          name: 'Café Americano',
          price: 5,
          category: 'breakfast',
          type:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },   
        {
          name: 'Café com Leite',
          price: 7,
          category: 'breakfast',
          type:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Suco de Laranja',
          price: 7,
          category: 'breakfast',
          type:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Misto Quente',
          price: 10,
          category: 'breakfast',
          type:'',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Água 700ml',
          price: 7,
          category: 'lunch',
          type:'beverages',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Água 500ml',
          price: 5,
          category: 'lunch',
          type:'beverages',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refrigerante 700ml',
          price: 10,
          category: 'lunch',
          type:'beverages',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refrigerante 500ml',
          price: 7,
          category: 'lunch',
          type:'beverages',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Simples',
          price: 10,
          category: 'lunch',
          type:'burger',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Duplo',
          price: 15,
          category: 'lunch',
          type:'burger',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Batata Frita',
          price: 5,
          category: 'lunch',
          type:'siders',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Anéis de Cebola',
          price: 5,
          category: 'lunch',
          type:'siders',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
