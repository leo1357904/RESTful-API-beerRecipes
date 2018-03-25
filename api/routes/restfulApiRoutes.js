'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/restfulApiController');

  // todoList Routes
  app.route('/beerRecipes')
    .get(todoList.list_all_recipes)
    .post(todoList.create_a_recipe);


  app.route('/beerRecipes/:beer_id')
    .get(todoList.read_a_recipe)
    .put(todoList.update_a_recipe)
    .delete(todoList.delete_a_recipe);
};
