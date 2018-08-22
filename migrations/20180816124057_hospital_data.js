
exports.up = function(knex, Promise) {
  return knex.schema.withSchema('public').createTable('hospitals', function (table) {
    table.increments();
    table.string('hospital_name');
    table.string('hospital_id');
    table.string('phoneNumber');
    table.string('email');
    table.string('plot_number');
    table.string('street');
    table.string('district');
    table.string('pincode');
    table.string('landmark');
    table.string('state');
    table.string('password')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.withSchema('public').dropTable('hospitals')

};
