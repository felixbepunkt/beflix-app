// Display list of all Authors.
exports.index = function(req, res) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
    res.render('imdb', { title: 'IMDB-APP' });
};
