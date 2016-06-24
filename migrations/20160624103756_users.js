
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('googleId');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
