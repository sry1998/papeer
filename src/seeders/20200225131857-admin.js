module.exports = {
  up: (queryInterface, Sequelize)=> queryInterface.bulkInsert(
    'Admins',
    [
      {
        firstName: 'Shweta',
        lastName: 'Yadav',
        email: 'admin@gmail.com',
        role: true,
        password: 'e10adc3949ba59abbe56e057f20f883e',
        isActive: true,
        contact: '9876543321',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
      {
        firstName: 'Damini',
        lastName: 'Yadav',
        email: 'user@gmail.com',
        role: false,
        password: 'e10adc3949ba59abbe56e057f20f883e',
        isActive: false,
        contact: '9876500321',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
