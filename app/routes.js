// app/routes.js

	module.exports = function(app) {

		// server routes ===========================================================
		// handle things like api calls
		// authentication routes
		var Article = require('./models/Article')
		var User = require('./models/User')
		// sample api route
		app.get('/api/articles', function(req, res) {
			// use mongoose to get all nerds in the database
			Article.find(function(err, articles) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(articles); // return all nerds in JSON format
			});
		});

		app.get('/api/articles/:art_id', function(req, res) {
			// use mongoose to get all nerds in the database
			Article.findById(req.params.art_id,function(err, article) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(article); // return all nerds in JSON format
			});
		});

		app.get('/api/users', function(req, res) {
			// use mongoose to get all nerds in the database
			User.find(function(err, users) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(users); // return all nerds in JSON format
			});
		});

		app.get('/api/users/:user_id', function(req, res) {
			// use mongoose to get all nerds in the database
			User.findById(req.params.user_id, function(err, user) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json(user); // return all nerds in JSON format
			});
		});

		app.get('/api/users/name/:name', function(req, res) {
			// use mongoose to get all nerds in the database
			var q = User.where({ name: req.params.name });
			q.findOne(function(err, user) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);
				if (user){
					res.json(user); // return all nerds in JSON format
				}
			});
		});

		app.get('/api/users/email/:email', function(req, res) {
			// use mongoose to get all nerds in the database
			var q = User.where({ email: req.params.email });
			q.findOne(function(err, user) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);
				if (user){
					res.json(user); // return all nerds in JSON format
				}
			});
		});

		// route to handle creating (app.post)
		app.post('/api/articles', function(req, res){
			var article = new Article();
			article.name = req.body.name;
			article.url = req.body.url;
			article.category = req.body.category;

			article.save(function(err){
				if (err)
					res.send(err);

				res.json({message: 'article created'})
			});
		});

		app.post('/api/users', function(req, res){
			var user = new User();
			user.name = req.body.name;
			user.password = req.body.password;
			user.email = req.body.email;
			user.articlesRead = [];
			user.articlesReccomended =[];

			user.save(function(err){
				if (err)
					res.send(err);

				res.json({message: 'user created'})
			});
		});
		// route to handle delete (app.delete)

		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

	};
