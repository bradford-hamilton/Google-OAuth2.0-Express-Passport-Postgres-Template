var knex = require('./knex');

module.exports = {
  findUserById: function(profileId) {
    return knex('users')
      .select()
      .where({ googleId: profileId })
      .first();
  },

  createUser: function(profileId) {
    return knex('users')
      .insert({ googleId: profileId });
  }
};
