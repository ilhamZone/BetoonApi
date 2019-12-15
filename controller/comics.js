const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Comic = models.comic;
const Favorite = models.favourite;

exports.ShowComic = (req, res) => {
  Comic.findAll({ order: [['title', 'ASC']] }).then(result => res.send(result));
};

exports.SearchComics = (req, res) => {
  const cari = req.query.title;
  Comic.findAll({
    where: { title: { [Op.like]: `%${cari}%` } }
  }).then(result => res.send(result)).catch(err => res.send(err));
};

exports.ShowComicFav = (req, res) => {
  Comic.findAll({
    order: [['title', 'ASC']],
    include: [{
      model: Favorite,
      as: 'Favorite',
      required: false,
      where: { users_id: req.params.idU }
    }]
  }).then(result => {
    res.send({
      messange: 'Get Comic Successfully',
      result
    });
  }).catch(err => {
    res.send({
      messange: 'Cannot get Data',
      err
    });
  });
}