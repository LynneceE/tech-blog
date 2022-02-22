const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const exphbs = require('express-handlebars');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => { // change force: false to true when making changes to Sequelize models
  app.listen(PORT, () => console.log('Now listening', `http://localhost:${PORT}`));
}); 