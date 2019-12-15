'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.INTEGER,
    image: DataTypes.STRING,
    comics_id: DataTypes.INTEGER,
    // created_by: DataTypes.INTEGER
  }, {});
  episode.associate = function (models) {
    // associations can be defined here
    // episode.belongsTo(models.user, {
    //   as: 'CreatedBy',
    //   foreignKey: 'created_by'
    // });
    episode.belongsTo(models.comic, {
      as: 'Comic',
      foreignKey: 'comics_id'
    });
  };
  return episode;
};
