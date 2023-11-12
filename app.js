
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes = require('./router/user-router');
const chatRoute = require('./router/chat-router')
const User = require('./model/user-model');
const personalMsg = require('./model/chat-model')
const app = express();

// Use cors directly in the main application file
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/chat',chatRoute);

User.hasMany(personalMsg);
personalMsg.belongsTo(User);

sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((err) => console.log(err));
