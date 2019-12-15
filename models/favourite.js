'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define('favourite', {
    users_id: DataTypes.INTEGER,
    comics_id: DataTypes.INTEGER,
    is_favorite: DataTypes.BOOLEAN,
  }, {});
  favourite.associate = function(models) {
    // associations can be defined here
    favourite.belongsTo(models.user, {
      as: 'User',
      foreignKey: 'users_id'
    });
    favourite.belongsTo(models.comic, {
      as: 'Comics',
      foreignKey: 'comics_id'
    });
  };
  return favourite;
};
