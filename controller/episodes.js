const models = require('../models');
const Episodes = models.episode;

exports.ShowEpisode = (req, res) => {
  Episodes.findAll({ where: { comics_id: req.params.idC } })
    .then(result => res.send(result)).catch(err => res.send(err));
};