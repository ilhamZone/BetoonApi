const models = require('../models');
const Favorites = models.favourite;
const Masters = models.master;

exports.ShowFavorites = (req, res) => {
  Favorites.findAll({
    include: [{
      model: Masters,
      as: 'Comics' 
    }],
    where: { id_users: req.params.user_id }
  }).then(result => res.send(result)).catch(err => res.send(err));
}
