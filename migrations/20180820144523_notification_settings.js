
exports.up = function(knex, Promise) {
  return knex.schema.withSchema('public').createTable('notifications', function (table) {
    table.string('id');
    table.string('notification_text');
    table.string('active');
  })
};

exports.down = function(knex, Promise) {
  return  knex.schema.withSchema('public').dropTable('notifications')

};
