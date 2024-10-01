exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('produkti').del()
    .then(function () {
      // Inserts seed entries
      return knex('produkti').insert([
        {
          "id": 1,
          "name": "Purina Cat Chow Indoor Adult Cat Dry Food",
          "price": 24.99,
          "nutrition": "With Vitamins, Real Meat, Prebiotic",
          "src": "./assets/images/cat-food-1-1.jpg",
          "discount": 15
        },
        {
          "id": 2,
          "name": "Purina Cat Chow Complete All Life Stages Cat Dry Food",
          "price": 24.99,
          "nutrition": "With Vitamins, Real Meat, Omegas",
          "src": "./assets/images/cat-food-2-1.jpg",
          "discount": 15
        },
        {
          "id": 3,
          "name": "Purina Cat Chow Senior Cat Dry Food",
          "price": 10.99,
          "nutrition": "High-Protein, Real Meat",
          "src": "./assets/images/cat-food-3-1.jpg",
          "discount": 15
        },
        {
          "id": 4,
          "name": "Purina Cat Chow Complete Dry Cat Food High-Protein",
          "price": 18.99,
          "nutrition": "With Vitamins, Real Meat, Prebiotic",
          "src": "./assets/images/cat-food-4-1.jpg",
          "discount": 15
        },
        {
          "id": 5,
          "name": "Royal Canin Feline Breed Nutrition Maine Coon Adult Dry Cat Food",
          "price": 45.99,
          "nutrition": "With Vitamins, Omegas, Prebiotic",
          "src": "./assets/images/cat-food-5-1.jpg",
          "discount": 15
        },
        {
          "id": 6,
          "name": "Royal Canin Feline Breed Nutrition Persian Breed Adult Dry Cat Food",
          "price": 46.99,
          "nutrition": "Corn Free, Soy Free, High-Protein, Omegas",
          "src": "./assets/images/cat-food-6-1.jpg",
          "discount": 15
        },
        {
          "id": 7,
          "name": "Royal Canin Ragdoll Dry Cat Food",
          "price": 41.99,
          "nutrition": "Corn Free, Soy Free, High-Protein, Omegas",
          "src": "./assets/images/cat-food-7-1.jpg",
          "discount": 15
        },
        {
          "id": 8,
          "name": "Royal Canin Bengal Adult Cat Food",
          "price": 42.99,
          "nutrition": "Corn Free, Soy Free, High-Protein, Omegas",
          "src": "./assets/images/cat-food-8-1.jpg",
          "discount": 15
        }
      ]);
    });
};
