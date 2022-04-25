'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        active: true,
        email: "john@doe.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      name: 'Bob Marley',
        active: true,
        email: "bob@marley.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Elvis Presley',
        active: true,
        email: "elvis@presley.com",
        role: "teacher",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'John Lenon',
        active: false,
        email: "john@lenon.com",
        role: "teacher",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Katy Perry',
        active: false,
        email: "katy@perry.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('People', null, {});
     
  }
};
