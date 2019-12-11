exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    // primary key, called "id", an integer, auto-increments
    tbl.increments();

    // .unique() is a constraint (rules we define to protect against invalid data)

    tbl
      .string("vin", 17)
      .notNullable()
      .index();

    tbl
      .string("make", 128)
      .notNullable()
      .index(); // makes searching for cars using this column faster

    tbl
      .string("model", 128)
      .notNullable()
      .index();

    tbl.integer("mileage");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
