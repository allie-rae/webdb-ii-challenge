
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 17).index();
        tbl.string('make', 150).index();
        tbl.string('model', 150).index();
        tbl.integer('mileage');
        tbl.boolean('cleanTitle').defaultTo(null);
        tbl.timestamps(true, true);
    })    
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
