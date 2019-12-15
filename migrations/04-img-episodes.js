'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('img_episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
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
      episodes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'episodes',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
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
    return queryInterface.dropTable('img_episodes');
  }
};