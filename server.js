var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');
var jwt = require('jwt-simple');
var _ = require('lodash');
var bcrypt = require('bcrypt');


var app = express();
var secretKey = 'supersecretkey';
var users = [
  {username: 'dickeyxxx', password: '$2a$10$Jmo/n32ofSM9JvzfH0z6Me6TMyn6c/U9JhzDG8xhQC4ExHMG1jXz2'}
];

// search user on database with Lo-Dash find function
function findUserByUsername(username){
  return _.find(users, {username: username});
}

// validate user password
function validateUser(user, password, cb){
  bcrypt.compareSync(password, user.password, cb);
}

app.use(bodyParser.json());
// load page
app.use(require('./controllers/static'));

// /api/posts
app.use('/api/posts', require('./controllers/api/posts'));



// /session
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

// app.post('/session', function(req, res){
//   var user = findUserByUsername(req.body.username);
//   validateUser(user, req.body.password, function(err, valid){
//     if(err || !valid){
//       return res.send(401);
//     }
//     var token = jwt.encode({username: user.username}, secretKey);
//     res.json(token);
//   })
// });
//
//
// app.get('/user', function(req, res){
//   var token = req.headers['x-auth'];
//   var user = jwt.decode(token, secretKey);
//   res.json(user);
// });

app.listen(3030, function(){
  console.log('Server listening on', 3030);
});
