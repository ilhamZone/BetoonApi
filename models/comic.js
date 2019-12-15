'use strict';
module.exports = (sequelize, DataTypes) => {
  const comic = sequelize.define('comic', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  comic.associate = function(models) {
    // associations can be defined here
    comic.belongsTo(models.user, {
      as: 'CreatedBy',
      foreignKey: 'created_by'
    });
    comic.hasOne(models.favourite, {
      foreignKey: 'comics_id',
      as: 'Favorite',
    });
  };
  return comic;
};