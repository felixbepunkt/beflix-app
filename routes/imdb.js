var express = require('express');
var router = express.Router();

// Require controller modules.
var imdb_controller = require('../controllers/imdbController');

// GET catalog home page.
router.get('/', imdb_controller.index);

module.exports = router;
