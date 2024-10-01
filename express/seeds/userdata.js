exports.seed = async function(knex) {
    // Deletes ALL existing entries
    return knex('uporabniki').del()
      .then(function () {
        // Inserts seed entries
        return knex('uporabniki').insert([
            {
                "id": 1,
                "first_name": "Administrative",
                "last_name": "Mode",
                "username": "admin.mode",
                "password": "administrative",
                "email": "no email"
            }, 
            {
                "id": 2,
                "first_name": "Admin",
                "last_name": "Admin",
                "username": "admin123",
                "email": "admin@splet.com",
                "password": "password"
            }, 
            {
                "id": 3,
                "first_name": "Kaylee",
                "last_name": "Pieter",
                "username": "kpieter2",
                "email": "kpieter2@zdnet.com",
                "password": "kayleepieter"
            }, 
            {
                "id": 4,
                "first_name": "Jean",
                "last_name": "Walwood",
                "username": "jwalwood3",
                "email": "jwalwood3@phpbb.com",
                "password": "jwalwood3"
            }, 
            {
                "id": 5,
                "first_name": "Noel",
                "last_name": "Sheen",
                "username": "nsheen4",
                "email": "nsheen4@ucsd.edu",
                "password": "thesheen"
            }
        ]);
      });
  };
  