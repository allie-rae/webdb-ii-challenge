
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          VIN: '11111111111111111',
          make: 'Toyota',
          model: 'Prius',
          mileage: 45000,
          cleanTitle: 'true'
        },
        {
          id: 2,
          VIN: '21111111111111111',
          make: 'Honda',
          model: 'Civic',
          mileage: 100000,
          cleanTitle: 'false'
        },
        {
          id: 3,
          VIN: '31111111111111111',
          make: 'Tesla',
          model: 'CyberTruck',
          mileage: 1,
          cleanTitle: 'true'
        }
      ]);
    });
};
