const models = require('../models');
const Comic = models.comic;
const Favorite = models.favourite;

exports.ShowFavorites = (req, res) => {
  Favorite.findAll({
    include: [{
      model: Comic,
      as: 'Comics'
    }],
    where: { users_id: req.params.user_id }
  }).then(result => res.send(result)).catch(err => res.send(err));
}

exports.AddFavorite = (req, res) => {
  Favorite.create({
    users_id: req.params.idU,
    comics_id: req.params.idC,
    is_favorite: 1
  }).then(result => {
    res.send({
      message: 'Add Succes',
      result
    })
  }).catch(err => {
    res.send({
      message: 'Cannot Add Data',
      err
    });
  });
}

exports.Unfavorite = (req, res) => {
  Favorite.destroy({ where: { id: req.params.id } })
    .then(result => {
      res.send({
        message: 'Unfavorite Successfully',
        result
      });
    }).catch(err => {
      res.send({
        message: 'Unfavorite Fail',
        err
      });
    });
}