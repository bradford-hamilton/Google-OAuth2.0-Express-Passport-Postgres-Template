require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/' + 'your local postgres database name'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
