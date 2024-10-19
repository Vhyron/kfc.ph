'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = await queryInterface.sequelize.query(
      `SELECT id, name FROM Categories;`
    );
    const categoryRows = categories[0];

    await queryInterface.bulkInsert('Products', [

      // What's New
      {
        name: "8-Pc Bucket Meal",
        description: "A complete group meal with 8 pcs of your favorite Original Recipe or Hot and Crispy chicken, gravy, your choice of 4 fixins, 4 steamed rice and your choice of 4 drinks.",
        price: 805.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Twister Combo",
        description: "Your choice between our California Maki or Pizza Twister, paired with your choice of fixins and drink.",
        price: 170.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Famous Bowl Meal",
        description: "Famous bowl with drink",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket of 10",
        description: "Buy a Bucket of 10 pcs of Original Recipe or Hot and Crispy chicken",
        price: 810.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zinger Combo",
        description: "Our signature big spicy sandwich made with crunchy Zinger chicken fillet topped with fresh lettuce and mayo in a soft Kaiser bun, served with your choice of fixins and drink.",
        price: 200.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "2-PC Fully Loaded Meal",
        description: "2 pieces of your favorite Original Recipe or Hot & Crispy chicken, paired with steamed rice,jr. mushroom soup, regular mashed potato, and your choice of drink.",
        price: 275.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Meal with Buttered Corn",
        description: "Zinger fillet drenched in Ala King sauce, with Chicken Butter Rice, Buttered Corn and Regular drink",
        price: 180.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Shots Combo",
        description: "Our crunchy Shots -- Fun Shots or Hot Shots-- matched with our well loved crispy fries or your choice of fixin and a drink.",
        price: 190.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zinger Steak Fully Loaded Meal",
        description: "Load up with this new epic hunger buster meal. It includes 1 piece of our signature Original Recipe chicken, Zinger Steak with Ala King sauce, Mushroom Soup, Mashed Potato, served with steamed rice and your choice of drink.",
        price: 265.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zinger Sandwich Fully Loaded Meal",
        description: "Load up with this new epic hunger buster meal. It includes 1 piece of our signature Original Recipe chicken, Zinger Sandwich, Mushroom Soup, Mashed Potato, served with steamed rice and your choice of drink.",
        price: 280.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Twister",
        description: "Creamy Spinach Twister: KFC Hotshots with creamy spinach sauce and cheese wrapped in a warm tortilla bread",
        price: 145.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Twister Combo",
        description: "Creamy Spinach Twister: KFC Hotshots with creamy spinach sauce and cheese wrapped in a warm tortilla breadwith fixin and drink.",
        price: 210.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Twister Fully Loaded Meal",
        description: "Creamy Spinach Twister with 1pc Chicken with rice, gravy and drink.",
        price: 300.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Zinger",
        description: "Creamy Spinach Zinger: KFC Zinger fillet with creamy spinach sauce and sliced cheese sandwich in soft seeded bun",
        price: 190.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Zinger Combo",
        description: "Creamy Spinach Zinger: KFC Zinger fillet with creamy spinach sauce and sliced cheese sandwich in soft seeded bun with fixin and drink.",
        price: 250.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Zinger Fully Loaded Meal",
        description: "Creamy Spinach Zinger with 1pc Chicken with rice, gravy and drink.",
        price: 345.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Corn",
        description: "Creamy Spinach Corn, featuring a blend of creamy spinach sauce, buttered corn, and shredded cheese.",
        price: 105.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Sauce",
        description: "Enjoy this addicting, sweet and smoky barbecue sauce!",
        price: 50.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Ala Carte",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce and paired with chicken butter rice.",
        price: 135.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Meal",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce and paired with chicken butter rice and a regular drink",
        price: 160.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Combo",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce and paired with chicken butter rice, regular side and a regular drink",
        price: 185.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Ala Carte",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger topped with an addicting, sweet and smoky barbecue sauce.",
        price: 165.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Combo",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger topped with an addicting, sweet and smoky barbecue sauce paired with regular fries and a regular drink.",
        price: 210.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Sloppy Shots Ala Carte",
        description: "CRISPY. SAUCY. JUICY. It's KFC's Sloppy shots topped with mayonnaise and an addicting, sweet and smoky barbecue sauce.",
        price: 205.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Sloppy Shots Meal",
        description: "CRISPY. SAUCY. JUICY. It's KFC's Sloppy shots topped with mayonnaise and an addicting, sweet and smoky barbecue sauce best paired with a regular drink",
        price: 220.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Fully Loaded",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce with 1 pc. chicken. Best paired with white rice, mushroom soup, mashed potato, and regular drink.",
        price: 270.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Bucket",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce now available for sharing.",
        price: 495.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Bucket Meal",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce now available for sharing. Best paired with chicken butter rice and regular drink",
        price: 575.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Smoky BBQ Zinger Steak Bucket Combo",
        description: "CRISPY. SAUCY. JUICY. It's KFC's signature Zinger Steak topped with an addicting, sweet and smoky barbecue sauce now available for sharing. Best paired with chicken butter rice, regular sides and regular drink",
        price: 705.00,
        categoryId: categoryRows.find(c => c.name === "What's New").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Fully Loaded Box
      {
        name: "1-PC Fully Loaded Meal",
        description: "1 piece of your favorite Original Recipe or Hot & Crispy chicken, paired with steamed rice, jr. mushroom soup, mashed potato and your choice of drink.",
        price: 195.00,
        categoryId: categoryRows.find(c => c.name === "Fully Loaded Box").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shots Fully Loaded Meal",
        description: "1 piece of your favorite Original Recipe or Hot & Crispy chicken with 1 regular serving of shots, paired with steamed rice, jr. mushroom soup, regular mashed potato, and your choice of drink.",
        price: 260.00,
        categoryId: categoryRows.find(c => c.name === "Fully Loaded Box").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "2-PC Fully Loaded Meal",
        description: "2 pieces of your favorite Original Recipe or Hot & Crispy chicken, paired with steamed rice,jr. mushroom soup, regular mashed potato, and your choice of drink.",
        price: 275.00,
        categoryId: categoryRows.find(c => c.name === "Fully Loaded Box").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Famous Bowl Fully Loaded Meal",
        description: "Load up with a complete meal in a box: 1 pc. chicken, Mushroom Soup, Famous Bowl, Rice and Drink",
        price: 230.00,
        categoryId: categoryRows.find(c => c.name === "Fully Loaded Box").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken Chops Fully Loaded Meal",
        description: "Load up with a complete meal in a box: 1 piece of our signature Original Recipe or Hot and Crispy chicken, Mushroom Soup, 2 pieces Original Recipe Chicken Chops, steamed rice, and your choice of drink.",
        price: 235.00,
        categoryId: categoryRows.find(c => c.name === "Fully Loaded Box").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Favourites
      {
        name: "2-PC Chicken Meal",
        description: "2 pieces of your favorite Original Recipe or Hot and Crispy chicken paired with steamed rice and your choice of drink.",
        price: 235.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1-PC Chicken Meal With Soup",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with steamed rice, mushroom soup, and your choice of drink.",
        price: 175.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1-PC Chicken Meal With Mashed Potato",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with steamed rice, mashed potato, and your choice of drink.",
        price: 175.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1-PC Chicken Meal W/ Brownie",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with steamed rice, brownie, and your choice of drink.",
        price: 175.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1-PC Chicken Ala Carte",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy chicken paired with steamed rice.",
        price: 105.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "2-PC Chicken Ala Carte",
        description: "2 pieces of your favorite Original Recipe or Hot and Crispy chicken paired with steamed rice.",
        price: 200.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1-PC Chicken Meal With Soup",
        description: "1 piece Original Recipe and rice paired with soup",
        price: 145.00,
        categoryId: categoryRows.find(c => c.name === "Favourites").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Meals for 2
      {
        name: "3-PC Duo Box Sundae",
        description: "A meal for two - comes with 3 pieces of our signature KFC chicken, 1 large Mashed Potato, 2 rice, 2 Jr. Sundae and 2 regular drinks.",
        price: 410.00,
        categoryId: categoryRows.find(c => c.name === "Meals for 2").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "3-PC Duo With Brownies",
        description: "3 pieces Duo with Brownies",
        price: 410.00,
        categoryId: categoryRows.find(c => c.name === "Meals for 2").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bowls, Pastas, & More
      {
        name: "1-PC Chicken Spaghetti Meal",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy Chicken meal paired with spaghetti and your choice of drink.",
        price: 195.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spaghetti",
        description: "Your favorite pinoy-style spaghetti topped with sweet meaty spaghetti sauce and sprinkled with grated cheese.",
        price: 65.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Rice Bowl Meal",
        description: "Our delicious Ala King Rice Bowl, served with your choice of drink.",
        price: 180.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Rice Bowl",
        description: "A bowl with 2 Original Recipe fillets drenched with creamy Ala-King sauce with steamed rice and corn on the side.",
        price: 140.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sisig Rice Bowl",
        description: "KFC Hot Shots drizzled with chicken sisig sauce, fried chicken skin, topped with mayo and a side of egg paired with steamed rice",
        price: 140.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sisig Rice Bowl Meal",
        description: "KFC Hot Shots drizzled with chicken sisig sauce, fried chicken skin, topped with mayo and a side of egg paired with steamed rice and your choice of drink.",
        price: 180.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Ala Carte",
        description: "Zinger fillet drenched in Ala King sauce, with Chicken Butter Rice",
        price: 130.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Meal",
        description: "Zinger fillet drenched in Ala King sauce, with Chicken Butter Rice and Regular drink",
        price: 155.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Meal With Buttered Corn",
        description: "Zinger fillet drenched in Ala King sauce, with Chicken Butter Rice, Buttered Corn and Regular drink",
        price: 180.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spaghetti Super Platter",
        description: "A group-size serving of our KFC Spaghetti - perfect for sharing!",
        price: 200.00,
        categoryId: categoryRows.find(c => c.name === "Bowls, Pastas, & More").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bucket Combos
      {
        name: "6-PC Bucket Meal",
        description: "A smart choice for a group of 3 with 6 pieces of your favorite KFC chicken, gravy, your choice of 3 fixins, and your choice of 3 drinks.",
        price: 635.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "8-PC Bucket Meal",
        description: "A complete group meal with 8 pcs of your favorite Original Recipe or Hot and Crispy chicken, gravy, your choice of 4 fixins, 4 steamed rice and your choice of 4 drinks.",
        price: 805.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket of 10",
        description: "Buy a Bucket of 10 pcs of Original Recipe or Hot and Crispy chicken",
        price: 810.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket of 6",
        description: "Get 6 pieces our signature KFC Chicken! Choose from Original Recipe or Hot and Crispy",
        price: 540.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "All-Chicken Bucket of 8",
        description: "8 pieces of our signature KFC chicken paired with gravy",
        price: 660.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "All-Chicken Bucket of 15",
        description: "15 pieces of our signature KFC chicken paired with gravy",
        price: 1205.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "All-Chicken Bucket of 20",
        description: "20 pieces of our signature KFC chicken paired with gravy",
        price: 1610.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket of 6 With Spaghetti Platter",
        description: "6 pieces of KFC signature chicken with 1 Spaghetti Super Platter",
        price: 680.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket of 6 With Fixin Super Platter",
        description: "6 pieces of KFC signature chicken with 1 Fixin Super Platter",
        price: 720.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket of 8 With Fixin Super Platter",
        description: "8 pieces of KFC signature chicken with 1 Fixin Super Platter",
        price: 880.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bucket Of 10 With Super Platter",
        description: "10 pieces of KFC signature chicken with 1 Fixin Super Platter",
        price: 1265.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Bucket",
        description: "Ala King Zinger Steak for sharing! It's KFC's signature Hot & Crispy Zinger fillet topped with a flavorful ala king sauce.",
        price: 475.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Bucket Meal",
        description: "Ala King Zinger Steak for sharing! It's KFC's signature Hot & Crispy Zinger fillet topped with a flavorful ala king sauce, paired with a chicken butter rice and a regular drink",
        price: 550.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ala King Zinger Steak Bucket Combo",
        description: "Ala King Zinger Steak for sharing! It's KFC's signature Hot & Crispy Zinger fillet topped with a flavorful ala king sauce, paired with a chicken butter rice and buttered corn. Also comes with a regular drink",
        price: 685.00,
        categoryId: categoryRows.find(c => c.name === "Bucket Combos").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Sandwiches
      {
        name: "California Maki Twister",
        description: "Asian inspired Twister with crunchy chicken strips wrapped in a toasted tortilla sandwich with mango bits and cucumber served with Japanese Mayo dressing.",
        price: 120.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zinger",
        description: "Our signature big spicy sandwich made with crunchy Zinger chicken fillet topped with fresh lettuce and mayo in a soft Kaiser bun.",
        price: 155.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Twister Combo",
        description: "Your choice between our California Maki or Pizza Twister, paired with your choice of fixins and drink.",
        price: 170.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Original Recipe Snacker",
        description: "A delicious whole meat chicken fillet sandwich with lettuce and pepper mayo in a 3.5 inch sesame seeded bun.",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zinger Combo",
        description: "Our signature big spicy sandwich made with crunchy Zinger chicken fillet topped with fresh lettuce and mayo in a soft Kaiser bun, served with your choice of fixins and drink.",
        price: 200.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Original Recipe Snacker Combo",
        description: "A filling combination of our delicious Junior Original Recipe Sandwich with your choice of fixin and drink.",
        price: 160.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken Burger W/ Cheese",
        description: "KFC Classic Chicken Burger made better with cheese",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken Burger W/ Cheese Combo",
        description: "KFC Classic Chicken Burger made better with cheese with your favorite fixin and drink",
        price: 145.00,
        categoryId: categoryRows.find(c => c.name === "Sandwiches").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Snacks
      {
        name: "Shots Combo",
        description: "Bite-sized pieces of spicy boneless chicken thats crispy on the outside, tender on the inside, with your choice of fixins and drink.",
        price: 130.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Regular Shots",
        description: "Fun bite-sized pieces of boneless chicken you can pop.",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Shots",
        description: "Fun bite-sized pieces of boneless chicken you can pop.",
        price: 130.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Famous Bowl",
        description: "KFC snack favorite, Famous bowl, filled with all your KFC favorites",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Famous Bowl Meal",
        description: "Famous bowl with drink",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Shots Combo",
        description: "Our crunchy Shots -- Fun Shots or Hot Shots-- matched with our well loved crispy fries or your choice of fixin and a drink.",
        price: 190.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Famous Bowl Super Platter",
        description: "A group-size serving of our KFC Famous Bowl - perfect for sharing!",
        price: 290.00,
        categoryId: categoryRows.find(c => c.name === "Snacks").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Drinks & Desserts
      {
        name: "Coke Regular",
        description: "Coke Regular",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Zero Regular",
        description: "Coke Zero Regular",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sprite Regular",
        description: "Sprite Regular",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Royal Regular",
        description: "Royal Regular ",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bottled Water",
        description: "Bottled Water",
        price: 39.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Medium",
        description: "Coke Medium",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Zero Medium",
        description: "Coke Zero Medium",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sprite Medium",
        description: "Sprite Medium",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Royal Medium",
        description: "Royal Medium",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Brewed Coffee",
        description: "Brewed Coffee",
        price: 45.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Large",
        description: "Coke Large",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Zero Large",
        description: "Coke Zero Large",
        price: 79.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sprite Large",
        description: "Sprite Large",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Royal Large",
        description: "Royal Large",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Brownie",
        description: "Brownie",
        price: 40.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chocolate Sundae",
        description: "Creamy vanilla ice cream drizzled with rich chocolate syrup",
        price: 50.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Caramel Sundae",
        description: "Creamy vanilla ice cream drizzled with sweet caramel syrup",
        price: 50.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Float",
        description: "Coke drink topped with creamy vanilla ice cream and rich chocolate syrup",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sprite Float",
        description: "Sprite drink topped with creamy vanilla ice cream",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Royal Float",
        description: "Royal drink topped with creamy vanilla ice cream",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coke Zero Float",
        description: "Coke Zero drink topped with creamy vanilla ice cream",
        price: 55.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Classic Cup Vanilla",
        description: "Creamy vanilla ice cream",
        price: 11.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Strawberry Sundae",
        description: "Creamy vanilla ice cream drizzled with strawberry pulp syrup",
        price: 50.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Iced Black Coffee",
        description: "KFCs signature blend of sweetened iced black coffee with 100% Arabica beans",
        price: 60.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Iced Coffee",
        description: "KFCs signature blend of creamy iced coffee with 100% Arabica beans",
        price: 65.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Unsweet Iced Tea Regular ",
        description: "Our House Blend Iced Tea is UNSWEETENED. Kindly add syrup at your desired sweetness level.",
        price: 70.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Unsweet Iced Tea Medium",
        description: "Our House Blend Iced Tea is UNSWEETENED. Kindly add syrup at your desired sweetness level.",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Unsweet Iced Tea Large",
        description: "Our House Blend Iced Tea is UNSWEETENED. Kindly add syrup at your desired sweetness level.",
        price: 85.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "6-PC Brownie Box",
        description: "6 pieces of KFC’s baked classic fudgy brownies glazed with sweet chocolate.",
        price: 140.00,
        categoryId: categoryRows.find(c => c.name === "Drinks & Desserts").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Sides
      {
        name: "Rice",
        description: "Extra serving of steamed white rice.",
        price: 40.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mashed Potato",
        description: "Creamy mashed potato topped with our signature gravy.",
        price: 60.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Mashed Potato",
        description: "A large serving of our Mashed Potato.",
        price: 85.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Macaroni",
        description: "Macaroni pasta mixed with rich mayonnaise, ground chicken, pickle relish, and cheese.",
        price: 70.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Macaroni",
        description: "A large serving of our Macaroni.",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coleslaw",
        description: "A fresh mix of vegetables -cabbage, carrots, and onions - all blended in a tangy, homestyle dressing.",
        price: 70.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Coleslaw",
        description: "A large serving of our Coleslaw.",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Crispy Fries",
        description: "Signature thick-cut flavored fries that is crispy and tasty on the outside but soft on the inside.",
        price: 60.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Crispy Fries",
        description: "A large serving of our signature fries.",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Junior Bucket of Fries",
        description: "Our signature thick cut flavored fries in a junior bucket.",
        price: 130.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Regular Gravy",
        description: "An extra serving of our famous gravy.",
        price: 30.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Gravy",
        description: "A heftier serving of our famous gravy.",
        price: 40.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Buttered Corn",
        description: "Buttered Corn",
        price: 60.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Large Buttered Corn",
        description: "Large Buttered Corn",
        price: 85.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mushroom Soup",
        description: "Creamy soup with real mushroom pieces.",
        price: 60.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Extra Chicken Butter Rice",
        description: "Chicken Butter Rice",
        price: 45.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mashed Potato Super Platter",
        description: "A group-size serving of our KFC Mashed Potato - perfect for sharing!",
        price: 265.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Buttered Corn Super Platter",
        description: "A group-size serving of our KFC Buttered Corn - perfect for sharing!",
        price: 265.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Macaroni Salad Super Platter",
        description: "A group-size serving of our KFC Macaroni Salad - perfect for sharing!",
        price: 290.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coleslaw Salad Super Platter",
        description: "A group-size serving of our KFC Coleslaw Salad - perfect for sharing!",
        price: 290.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Creamy Spinach Corn",
        description: "Creamy Spinach Corn, featuring a blend of creamy spinach sauce, buttered corn, and shredded cheese.",
        price: 105.00,
        categoryId: categoryRows.find(c => c.name === "Sides").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Deals
      {
        name: "1-PC Chicken Meal",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy chicken paired with steamed rice and your choice of drink.",
        price: 130.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1-PC Chicken Ala Carte",
        description: "1 piece of your favorite Original Recipe or Hot and Crispy chicken paired with steamed rice.",
        price: 105.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spaghetti Meal",
        description: "Your favorite pinoy-style spaghetti topped with sweet meaty spaghetti sauce and sprinkled with grated cheese, paired with your choice of drink.",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flavor Shots Mushroom Gravy Meal",
        description: "Bite-sized pieces of crunchy boneless chicken topped with mushroom gravy sauce with a generous serving of steamed rice, paired with your choice of drink.",
        price: 105.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flavor Shots Mushroom Gravy",
        description: "Bite-sized pieces of crunchy boneless chicken topped with mushroom gravy sauce with a generous serving of steamed rice.",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chicken Burger Combo",
        description: "An affordable meal of delicious chicken burger with your choice of fixin and drink.",
        price: 115.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Classic Chicken Burger",
        description: "Classic crispy chicken burger served with fresh lettuce and tasty dressing.",
        price: 50.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flavor Shots W/ Soup",
        description: "Bite-sized pieces of crunchy boneless chicken topped with mushroom gravy sauce with half soup with a generous serving of steamed rice, paired with your choice of drink.",
        price: 140.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flavor Shots Combo W/ Reg Mashed Potato",
        description: "Bite-sized pieces of crunchy boneless chicken topped with mushroom gravy sauce with regular mashed potato with a generous serving of steamed rice, paired with your choice of drink.",
        price: 140.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Original Recipe Nuggets",
        description: "4 Pcs Of Chicken Nuggets Coated In Original Recipe Breading Paired With BBQ Dip For A Crunchy Flavorful Snack.",
        price: 75.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Original Recipe Nuggets Meal",
        description: "Crispy, tender goodness of boneless Original Recipe chicken with your choice of drink",
        price: 90.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Original Recipe Nuggets Combo",
        description: "Original Recipe Nuggets, Fixin, Drink",
        price: 120.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "4-PC Nuggets Meal With Spaghetti",
        description: "4 pieces of our Original Recipe nuggets with barbecue dip, paired with our Pinoy-style spaghetti, and your choice of drink",
        price: 155.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "OR Chicken Tenders",
        description: "Two of KFC's Original Recipe chicken fillet drizzled with our signature gravy, perfectly paired with steaming white rice",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "OR Chicken Tenders Meal",
        description: "No need to scrimp on taste even if you save on budget, savor KFC Original Recipe Chicken Tenders with your choice of drink",
        price: 110.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "OR Chicken Tenders Combo",
        description: "Enjoy KFCs affordable and finger lickin good meal - KFC Original Recipe Chicken Tenders with mushroom soup and your choice of drink.",
        price: 145.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Chicken Burger",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Spaghetti",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Nuggets",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Fries",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Creamy Iced Coffee",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 80.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Original Recipe Snacker",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Flavor Shots",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Famous Bowl",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Choose & Match Regular Shots",
        description: "The long awaited deal is FINALLY BACK! Finally, the NEW KFC CHOOSE & MATCH promo offers a new set of Snacking Favorites with your favorite sides!",
        price: 95.00,
        categoryId: categoryRows.find(c => c.name === "Deals").id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
