'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_user', {
      seq: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        unique    : true,
        type: Sequelize.STRING,
      },
      user_pw: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        unique    : true,
        type: Sequelize.STRING,
      },
      role_seq: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model:'tb_role',
          key  :'seq'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_user');
  }
};