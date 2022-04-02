const { Meals } = require('./models');

const controller = {};

controller.saveMeal = (req, res, next) => {
  console.log(req.body)
  next();
  Meals.create(req.body).exec()
    .then(() => { res.locals.newMeal = req.body })
    .then(() => next())
    .catch((err) => next({
      log: `Error in getNutrition ${err}`,
      message: { err: 'An error occured in getNutrition'}
    }));
    // .then((data) => { res.locals.savedMeal = data})
    // .then(next)
}

controller.getMeals = (req, res, next) => {
  Meals.find({})
    .then((res) => {
      res.locals.meals = res;
      next();
    })
    .catch((err) => next({
      log: `Error in getMeals ${err}`,
      message: { err: 'An error occured in getMeals'}
    }));
}

module.exports = controller;