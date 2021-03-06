'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      comics_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'comics',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      // created_by: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'users',
      //     key: 'id'
      //   },
      //   onUpdate: 'cascade',
      //   onDelete: 'cascade'
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('episodes');
  }
};
